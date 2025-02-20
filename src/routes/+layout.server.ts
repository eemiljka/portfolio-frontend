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
  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select();

  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
  }

  console.log("Projects Loaded:", projects);

  return {
    projects: projects ?? [],
    authorized: true
  };
}