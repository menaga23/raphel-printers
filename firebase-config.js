/**
 * ═══════════════════════════════════════════════════════════════
 *  RAPHEL PRINTERS — firebase-config.js
 *  Firebase credentials & setup for customer feedback system.
 * ═══════════════════════════════════════════════════════════════
 * 
 * TODO: Replace the placeholder values below with your actual Firebase
 * project credentials:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create or open your Firebase project
 * 3. Go to Project Settings (gear icon) -> "Your apps" -> Web (</>)
 * 4. Copy the config values and paste them below.
 */

export const firebaseConfig = {
  apiKey: "TODO_FIREBASE_API_KEY",
  authDomain: "TODO_PROJECT_ID.firebaseapp.com",
  projectId: "TODO_PROJECT_ID",
  storageBucket: "TODO_PROJECT_ID.appspot.com",
  messagingSenderId: "TODO_MESSAGING_SENDER_ID",
  appId: "TODO_FIREBASE_APP_ID"
};

/**
 * Checks whether Firebase credentials have been configured.
 * Returns false if keys still contain placeholder "TODO" markers.
 */
export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("TODO") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.includes("TODO")
  );
}
