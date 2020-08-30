/* eslint-disable @typescript-eslint/no-var-requires */
const admin = require('firebase-admin');

const serviceAccount = require('./angelozdev-devtter-firebase-adminsdk-aaypd-0ab294d4d6.json');

if (!admin.apps.length) {
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://angelozdev-devtter.firebaseio.com'
   });
}

export const firestore = admin.firestore();
