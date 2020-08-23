import firebase, { firestore } from 'firebase';

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

interface IUser {
   avatar: string | null;
   email: string | null;
   name: string | null;
   username: string | null;
}

/* Map User */
export const mapUserFromFirebaseAuth = (
   user: firebase.User | null | undefined
): IUser | null => {
   if (!user) return null;
   const { email, photoURL, displayName } = user;
   return { avatar: photoURL, email, name: displayName, username: email };
};

/* when the state changed */
/* Esto sucede automáticamente al hacer el loginWithGitHub */
export const onAuthStateChanged = (
   setUser: React.SetStateAction<any>
): firebase.Unsubscribe => {
   return firebase.auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);
      setUser(mapUserFromFirebaseAuth(user));
   });
};

/* Login with GitHub */
export const loginWithGitHub = async (): Promise<
   firebase.auth.UserCredential
> => {
   const githubProvider = new firebase.auth.GithubAuthProvider();
   return firebase.auth().signInWithPopup(githubProvider);
};

export const addDeveet = ({
   avatar,
   username,
   message,
   name,
   img
}: {
   avatar: string;
   username: string;
   message: string;
   name: string;
   img: string | null;
}): Promise<firebase.firestore.DocumentReference<firestore.DocumentData>> => {
   return db.collection('deveets').add({
      avatar,
      username,
      message,
      createAt: firebase.firestore.Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0,
      name,
      img
   });
};

export const getLastDeveets = (): Promise<
   { id: string; createAt: number }[]
> => {
   return db
      .collection('deveets')
      .orderBy('createAt', 'desc')
      .get()
      .then(({ docs }) =>
         docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            const { createAt } = data;
            const date = +createAt.toDate();

            return { ...data, id, createAt: date };
         })
      );
};

export const uploadImage = (file: File): firebase.storage.UploadTask => {
   const ref = firebase.storage().ref(`images/${file.name}`);

   const task = ref.put(file);

   return task;
};
