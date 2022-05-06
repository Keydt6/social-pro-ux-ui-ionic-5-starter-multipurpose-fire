import { Post } from './post';
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
export class PostService {
    // postCollection: AngularFirestoreCollection <Post>;
    postCollection: Observable<any[]>;

    constructor(
        firestore: Firestore
        // private afs: AngularFirestore
    ) {
        const myCollection = collection(firestore, 'items');
        this.postCollection = collectionData(myCollection);
        // this.postCollection = this.afs.collection<Post>('posts');
    }

    // addPost(item: Post) {
    //     item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    //     return this.postCollection.add(item);
    // }

    // updatePostById(id, item: Post) {
    //     return this.postCollection.doc(id).set(item);
    // }

    // getPosts(): Observable<Post[]> {
    //     return this.postCollection.valueChanges({idField: 'id'});
    // }
    
    // getPostById(id): Observable<Post>{
    //     return this.postCollection.doc<Post>(id).valueChanges().pipe(take(1));
    // }

    // deletePostById(id) {
    //     return this.afs.doc<Post>(`posts/${id}`).delete();
    // }
}

