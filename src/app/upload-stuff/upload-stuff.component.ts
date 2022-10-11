import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from 'src/app/services/services.component';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Database, getDatabase, ref, set } from "firebase/database";


@Component({
  selector: 'app-upload-stuff',
  templateUrl: './upload-stuff.component.html',
  styleUrls: ['./upload-stuff.component.scss']
})
export class UploadStuffComponent implements OnInit {
  allUsers : any  
  group = ""

  constructor(private service: ServicesComponent ,private db: AngularFirestore) { }

  ngOnInit(): void {
  }
  writeUserData(value : any) {
    const db = getDatabase();
    set(ref(db, 'รายการสินค้า/' + this.group + '/'+ value.Name_Item), {
      Group_Item: this.group,
      ID_Item: value.ID_Item,
      Name_Item: value.Name_Item,
      Detail_Item : value.Detail_Item,
      Cost_Item: value.Cost_Item,
      Quantity_Item: value.Quantity_Item,
      Unit_Item : value.Unit_Item,
      Img_Item : value.Img_Item
    });
    alert('Item created!')
    
  }
}
