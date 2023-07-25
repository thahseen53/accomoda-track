import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://vyalvhplnkjbzrpsztcg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YWx2aHBsbmtqYnpycHN6dGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1Mjk5NTksImV4cCI6MjAwMzEwNTk1OX0.5O7CJk9ttnOO5rM1_90h5kW1s_t_UMYWUqm1iIC0ywg"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

