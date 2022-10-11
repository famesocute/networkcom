import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Database, getDatabase, ref, set, onValue } from "firebase/database";

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  userType : any
  stuff : any
  stuff2 : any
  All_data:any

  loading = true

  constructor(private route: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.userType = this.route.snapshot.queryParamMap.get("id");
    console.log(this.userType)

    const db = getDatabase();
    var x
    this.stuff = "["

    const starCountRef = ref(db, 'รายการสินค้า/'+this.userType);
    onValue(starCountRef, (snapshot) => {
      this.All_data = snapshot.val();
      console.log(this.All_data)
        var y
        for (y in this.All_data) {

            this.stuff = this.stuff + '{"ID_Item":"' + this.All_data[y].ID_Item + '",'
            this.stuff = this.stuff + '"Group_Item":"' + this.All_data[y].Group_Item + '",'
            this.stuff = this.stuff + '"Name_Item":"' + this.All_data[y].Name_Item + '",'
            this.stuff = this.stuff + '"Detail_Item":"' + this.All_data[y].Detail_Item + '",'
            this.stuff = this.stuff + '"Cost_Item":"' + this.All_data[y].Cost_Item + '",'
            this.stuff = this.stuff + '"Quantity_Item":"' + this.All_data[y].Quantity_Item + '",'
            this.stuff = this.stuff + '"Unit_Item":"' + this.All_data[y].Unit_Item + '",'
            this.stuff = this.stuff + '"Img_Item":"' + this.All_data[y].Img_Item + '"},'
        }
      
      this.stuff = this.stuff.substring(0, this.stuff.length - 1);
      this.stuff = this.stuff + "]";
      console.log(this.stuff)

      if (this.stuff != "]") {
        var obj = JSON.parse(this.stuff);
        this.stuff2 = obj
        console.log(this.stuff2)
        this.loading = false
      }
    });
  }

}
