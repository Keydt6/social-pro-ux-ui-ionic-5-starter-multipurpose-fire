import { Categories } from './categories';
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
export class CategoriesService {
    // categoriesCollection: AngularFirestoreCollection <Categories>;
    categoriesCollection: Observable<any[]>;
    constructor(
        // private afs: AngularFirestore
        firestore: Firestore
    ) {
        const myCollection = collection(firestore, 'items');
        this.categoriesCollection = collectionData(myCollection);
        // this.categoriesCollection = this.afs.collection<Categories>('categorieses');
    }

    // addCategories(item: Categories) {
    //     item.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    //     return this.categoriesCollection.add(item);
    // }

    // updateCategoriesById(id, item: Categories) {
    //     return this.categoriesCollection.doc(id).set(item);
    // }

    // getCategoriess(): Observable<Categories[]> {
    //     return this.categoriesCollection.valueChanges({idField: 'id'});
    // }

    // getCategoriesById(id): Observable<Categories>{
    //     return this.categoriesCollection.doc<Categories>(id).valueChanges().pipe(take(1));
    // }

    // deleteCategoriesById(id) {
    //     return this.afs.doc<Categories>(`categorieses/${id}`).delete();
    // }
}

