import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bncyivxyihfqenzfgldr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuY3lpdnh5aWhmcWVuemZnbGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODQzMzUsImV4cCI6MjA5ODU2MDMzNX0.WHlPiZzuFOQU_W8Tky0-s1YN2Ugc_RB0B_nOZL_CJsc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
