import { firebaseAuth, firebaseApp, firebaseDB, firestoreDB } from "../../src/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { USER_STATE_CHANGE } from "../constants";

export function fetchUser() {
    return ((dispatch) => {
        const docRef = doc(firebaseDB, "users", firebaseAuth.currentUser.uid);
        getDoc(doc(firebaseDB, "users", firebaseAuth.currentUser.uid)).then((snapshot) => {
            if(snapshot.exists()) {
                console.log('snapshot***', snapshot.data());
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()});
            } else {
                console.log("user doesn't exist");
            }
        }).catch((err) => console.log(err));
    });
}