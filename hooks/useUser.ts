import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { IUser } from 'interfaces/user';
import { onAuthStateChanged } from 'firebase/client';
import { useRouter } from 'next/router';

export const USER_STATES = {
   NOT_LOGGED: null,
   NOT_KNOWN: undefined
};

const useUser = () => {
   const [user, setUser] = useState<undefined | IUser | null>(
      USER_STATES.NOT_KNOWN
   );
   const [loading, setLoading] = useState(true);

   const router = useRouter();

   useEffect(() => {
      setLoading(true);
      onAuthStateChanged(setUser);
      setLoading(false);
   }, []);

   useEffect(() => {
      user === USER_STATES.NOT_LOGGED && router.replace('/');
   }, [user]);

   return { user, loading };
};

export default useUser;
