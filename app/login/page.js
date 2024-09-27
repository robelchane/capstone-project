// Reference from web dev 2 class 
// https://webdev2.warsylewicz.ca/week-9/assignment
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from "./firebase/auth-context";
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

    const signIn = async () => {
        await gitHubSignIn();
    };

    const signInGoogle = async () => {
        await googleSignIn();
    };

    const signOut = async () => {
        await firebaseSignOut();
    };

    return (
        <main>
            <div className="fixed top-0 left-0 z-50 m-4 p-2 cursor-pointer hover:text-blue-500">
                <Link href="./">
                    <FontAwesomeIcon icon={faHouse} size="2x" />
                </Link>
            </div>

            <div className="flex flex-col items-center m-20">
                <div className="m-10 p-4 text-3xl">
                    <h1>Sign In to Your Account</h1>
                </div>
                <div>
                    {user ? (
                        <div>
                            <div>
                                <p className="text-center m-2 font-semibold">Welcome!</p>
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
                <div className="flex justify-center mt-8">
                  <Link href="/signup">
                      <p className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Sign up
                      </p>
                  </Link>
                </div>
            </div>
        </main>
    );
}
