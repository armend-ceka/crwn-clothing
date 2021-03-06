import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAovDOL3kYVZfiPiMaCxI0Zz_da5XJHMkY",
    authDomain: "crwn-db-fc432.firebaseapp.com",
    databaseURL: "https://crwn-db-fc432.firebaseio.com",
    projectId: "crwn-db-fc432",
    storageBucket: "crwn-db-fc432.appspot.com",
    messagingSenderId: "922537355412",
    appId: "1:922537355412:web:a06652f4d5a997cfda6c81"
};

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log('Error creating user',error.message); 
        }
    }

    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 