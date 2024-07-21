import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uqgigotknuknxhevxtdy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lnb3RrbnVrbnhoZXZ4dGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTkyMDUsImV4cCI6MjAzMzkzNTIwNX0.RRVRMfYptxZM7099HxOp3_HLPUgHwaRsEANmjxQRG-Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
