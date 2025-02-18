import { supabase } from "$lib/subabaseClient";

export async function load() {
  const { data } = await supabase.from("projects").select();
  return {
    projects: data ?? [],
  };
}