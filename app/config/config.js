const fs = require('firebase-admin');
require('dotenv').config();
const {env} = require("../constant");
fs.initializeApp({
  credential: fs.credential.cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY
  })
});
const db = fs.firestore();

module.exports = db;
