"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./firebase/auth-context";
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const signIn = async () => {
    await gitHubSignIn();
    }

    // Sign in to Firebase with Google authentication
    const signInGoogle = async () => {
    await googleSignIn();
    }

    const signOut = async () => {
    await firebaseSignOut();
    }
     
    return (
        <div className="flex flex-col items-center m-20 ">
            <div className="m-10 p-4 text-3xl ">
                <h1>Sign In to Your Account</h1>
            </div>
            <div>
                {user ? (
                <div>
                    <div>
                        <p className="text-center m-2 font-semibold ">Welcome!</p>
                        <p className="mt-4">{user.displayName}</p>
                        <p className="mb-4">{user.email}</p>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={signOut} className="m-10 p-4 bg-blue-500 hover:bg-orange-500 rounded-lg">Sign Out</button>
                    </div>

                </div>
                ) : (
                <div>
                    <button onClick={signIn} className="m-10 p-4 bg-blue-500 hover:bg-orange-500 rounded-lg">Sign in with GitHub</button>
                    <button onClick={signInGoogle} className="m-10 p-4 bg-blue-500 hover:bg-orange-500 rounded-lg">Sign in with Google</button>
                </div>
                )}
            </div>
        </div>
    );
}
