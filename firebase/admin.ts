import config from 'config';
import admin from 'firebase-admin';

if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert(
         JSON.parse(config.FIREBASE_CREDENTIALS || '')
      ),
      databaseURL: config.FIREBASE_DB_URL
   });
}

export const firestore = admin.firestore();
