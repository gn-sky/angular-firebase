import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, runTransaction, updateDoc } from '@angular/fire/firestore';
import { Task } from '../feature-swim-lanes/task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwimLanesService {
  firestore: Firestore = inject(Firestore);
 
  addDocument = (name: string, task: Task) => addDoc(collection(this.firestore, name), task);

  deleteDocument = (name: string, taskId: string) => deleteDoc(doc(this.firestore, name, taskId));

  getCollection = (name: string): Observable<Task[]> => {
    const col = collection(this.firestore, name);
    const options = { idField: 'id' }; 
    return collectionData(col, options) as Observable<Task[]>;
  }

  getDoc = (name: string, taskId: string) => doc(this.firestore, name, taskId);

  transact = async (deleteFrom: string, addTo: string, task: Task) => {
    runTransaction(this.firestore, async () => {
      this.deleteDocument(deleteFrom, task.id as string);
      this.addDocument(addTo, task);
    })
  };

  updateDocument(collection: string, task: Task) {
    const docRef = this.getDoc(collection, task.id as string);
    updateDoc(docRef, task as any);
  }
}
