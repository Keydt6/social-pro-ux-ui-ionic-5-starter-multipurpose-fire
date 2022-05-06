import { User } from './user';
import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // userCollection: AngularFirestoreCollection <User>;
    userCollection: Observable<any[]>;
    constructor(
        firestore: Firestore
        // private afs: AngularFirestore
    ) {
        const myCollection = collection(firestore, 'items');
        this.userCollection = collectionData(myCollection);
        // this.userCollection = this.afs.collection<User>('users');
    }

    // addUser(item: User) {
    //     item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    //     return this.userCollection.add(item);
    // }

    // updateUserById(id, item: User) {
    //     return this.userCollection.doc(id).set(item);
    // }

    // getUsers(): Observable<User[]> {
    //     return this.userCollection.valueChanges({idField: 'id'});
    // }

    // getUserById(id): Observable<User>{
    //     return this.userCollection.doc<User>(id).valueChanges().pipe(take(1));
    // }

    // deleteUserById(id) {
    //     return this.afs.doc<User>(`users/${id}`).delete();
    // }
}

