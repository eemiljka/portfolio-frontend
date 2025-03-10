import { supabase } from "$lib/subabaseClient";
import { error, redirect } from "@sveltejs/kit";

export async function load({ url, cookies }) {
  let token = url.searchParams.get("token");

  if (token) {
    console.log("Checking token from URL:", token);

    const { data, error: tokenError } = await supabase
      .from("tokens")
      .select("token")
      .eq("token", token)
      .maybeSingle();

    if (tokenError || !data) {
      console.error("Invalid Token:", token, tokenError);
      throw error(403, "Invalid token");
    }

    // store token in cookies for future requests
    cookies.set("portfolio_token", token, {
      path: "/",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    console.log("Token validated & saved in cookies!");
  } else {
    token = cookies.get("portfolio_token") ?? null;
    if (!token) {
      throw redirect(303, "/access-denied");
    }
  }

  // fetch projects AFTER ensuring the token is stored correctly
  //TODO: fetch project images
  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select();

  /*const {data: projectImages, error: imagesError} = await supabase
  .storage.from("project-images").list("images", {
    limit: 100,
    offset: 0,
    sortBy: {column: 'name', order: 'asc'}
  })*/

    // Map over projects to add individual image URLs
let projectsWithImages = [];
if (projects) {
  projectsWithImages = await Promise.all(
    projects.map(async (project) => {
      // Assuming each project has an `image_path` field
      const { data: imageData, error: imageError } = await supabase
        .storage
        .from("project-images")
        .getPublicUrl(project.image_path);

      if (imageError) {
        console.error("Error fetching image for project", project, imageError);
        project.imageUrl = ""; // fallback if error
      } else {
        project.imageUrl = imageData.publicUrl;
      }
      return project;
    })
  );
}

  return {
    projects: projectsWithImages,
    authorized: true
  };
}