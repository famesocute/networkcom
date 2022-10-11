import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';

@Injectable({
  providedIn: 'root'
 })

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  }
  getAllUsers() {
    return new Promise<any>((resolve)=> {
    this.db.collection('User').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
   }
}
