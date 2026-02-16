import { initializeApp, getApps, getApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function hasFirebaseConfig() {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.projectId &&
      firebaseConfig.storageBucket &&
      firebaseConfig.messagingSenderId &&
      firebaseConfig.appId,
  );
}

function getFirebaseApp() {
  if (!hasFirebaseConfig()) {
    throw new Error("Firebase config is missing. Add NEXT_PUBLIC_FIREBASE_* variables.");
  }

  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export async function saveContactSubmission(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const app = getFirebaseApp();
  const db = getFirestore(app);

  const docRef = await addDoc(collection(db, "contact_submissions"), {
    ...input,
    status: "pending_email",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export function isFirebaseConfigured() {
  return hasFirebaseConfig();
}
