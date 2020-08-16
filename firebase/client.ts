import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyDy8iAiEEl8ExeyP6mdXqM55S0dnpG9HuM',
   authDomain: 'angelozdev-devtter.firebaseapp.com',
   databaseURL: 'https://angelozdev-devtter.firebaseio.com',
   projectId: 'angelozdev-devtter',
   storageBucket: 'angelozdev-devtter.appspot.com',
   messagingSenderId: '657983363184',
   appId: '1:657983363184:web:4a6dc9dc5e26d2fe6cbcb5'
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/* Map User */
export const mapUserFromFirebaseAuth = (
   user: firebase.User | null | undefined
) => {
   if (!user) return null;
   console.log(user);
   const { email, photoURL, displayName } = user;
   return { avatar: photoURL, email, name: displayName, username: email };
};

/* when the state changed */
/* Esto sucede automáticamente al hacer el loginWithGitHub */
export const onAuthStateChanged = (setUser: React.SetStateAction<any>) => {
   return firebase.auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);
      setUser(mapUserFromFirebaseAuth(user));
   });
};

/* Login with GitHub */
export const loginWithGitHub = async () => {
   const githubProvider = new firebase.auth.GithubAuthProvider();
   return firebase.auth().signInWithPopup(githubProvider);
};

export const addDeveet = ({
   avatar,
   username,
   message,
   name
}: {
   avatar: string;
   username: string;
   message: string;
   name: string;
}) => {
   return db.collection('deveets').add({
      avatar,
      username,
      message,
      createAt: firebase.firestore.Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0,
      name
   });
};

export const getLastDeveets = () => {
   return db
      .collection('deveets')
      .get()
      .then(({ docs }) =>
         docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { ...data, id };
         })
      );
};
