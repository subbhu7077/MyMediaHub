// ============================================
// MyMediaHub - Supabase Configuration
// ============================================

// 1. Apna Supabase Project URL yahan paste karo
const SUPABASE_URL = "https://xrqtqdxbpebuysclzkki.supabase.co";

// 2. Supabase Publishable Key yahan paste karni hai
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HbhuZ1d0eeMi6ik7kp2LgQ_3EpN2Rv7";

// Supabase client
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
