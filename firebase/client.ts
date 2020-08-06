import { initializeApp, auth, apps } from "firebase";
import { SetStateAction } from "react";

const firebaseConfig = {
   apiKey: "AIzaSyDy8iAiEEl8ExeyP6mdXqM55S0dnpG9HuM",
   authDomain: "angelozdev-devtter.firebaseapp.com",
   databaseURL: "https://angelozdev-devtter.firebaseio.com",
   projectId: "angelozdev-devtter",
   storageBucket: "angelozdev-devtter.appspot.com",
   messagingSenderId: "657983363184",
   appId: "1:657983363184:web:4a6dc9dc5e26d2fe6cbcb5"
};

!apps.length && initializeApp(firebaseConfig);

/* Map User */
export const mapUserFromFirebaseAuth = (
   user: firebase.User | null | undefined
) => {
   if (!user) return null;
   const { email, photoURL, displayName } = user;
   return { avatar: photoURL, email, username: displayName };
};

/* when the state changed */
/* Esto sucede automáticamente al hacer el loginWithGitHub */
export const onAuthStateChanged = (setUser: SetStateAction<any>) => {
   return auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);
      setUser(mapUserFromFirebaseAuth(user));
   });
};

/* Login with GitHub */
export const loginWithGitHub = async () => {
   const githubProvider = new auth.GithubAuthProvider();
   return auth().signInWithPopup(githubProvider);
};
