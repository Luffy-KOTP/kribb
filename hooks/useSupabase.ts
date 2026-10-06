import { useMemo } from 'react'
import { useAuth } from '@clerk/expo'
import { createClerkSupabaseClient } from '../lib/supabase';

export function useSupabase() {
  const { getToken } = useAuth();
  
  const client = useMemo(
    () => createClerkSupabaseClient(() => getToken()),
    [getToken],
  );

  return client 
}