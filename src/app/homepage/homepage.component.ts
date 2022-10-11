import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Injectable } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Database, getDatabase, ref, set, onValue } from "firebase/database";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  IMAGE1 = "clip-big-1.jpg"

  firstname = ""
  All_data: any
  stuff: any
  stuff2: any
  loading = true

  group: any = ['กระดาษถ่ายเอกสาร', 'กระดาษการ์ดสี_A4', 'กระดาษโฟโต้_กระดาษใบประกาศ', 'ฟิมล์เคลือบบัตร_กระดาษโน๊ต_กระดาษโน๊ตกาว(โพสอิท)', 'กระดาษรายงาน_กระดาษวาดภาพ_100ปอนด์_A4/A3',
    'กระดาษสติ๊กเกอร์_แผ่นใสรองปก_กระดาษคำตอบ', 'กระดาษต่อเนื่อง', 'กระดาษแฟกซ์_กระดาคาร์บอนก๊อบปี้', 'กระดาษสี_โปสเตอร์', 'กาว_ปืนกาว', 'เทปกาว_เทปใส_กระดาษกาวย่น',
    'สันรูด_สันห่วง_เทปสันปก', 'กรรไกร_มีดคัตเตอร์_ใบมีด_แท่นตัดสก๊อตเทป', 'แฟ้ม_ไส้แฟ้ม_ลิ้นแฟ้ม', 'สมุด_บิล', 'ดินสอ_เครื่องเหลาดินสอ_กล่องดินสอ_ไส้ดินสอ_ดินน้ำมัน',
    'ปากกา_ไส้ปากกา_ชอล์ก', 'ยางลบ_น้ำยาลบคำผิด_ลิควิดเปเปอร์_แปรงลบกระดาน', 'ไม้บรรทัด_ชุดเลขาคณิต_กระดานไวท์บอร์ด', 'สี_พู่กัน_จานสี', 'ที่เจาะกระดาษ_คลิปหนีบ_ลวดเสียบ_คลิปบอร์ด',
    'แม็กเย็บกระดาษ_ไส้แม็กเย็บกระดาษ', 'ตลับชาด_หมึกเติมตลับชาด_ตรายาง_ที่แขวนตรายาง', 'เครื่องคิดเลข_แม่เหล็ก_ที่คั้นหนังสือ', 'ดอกไม้_เชือก_ลิบบิ้น_ห่วงทอง_กิ๊บ_เข็มกลัด',
    'ซองเอกสาร_แก้วกระดาษ_กรวย', 'อุปกรณ์คอมพิวเตอร์', 'ปริ้นเตอร์_หมึกปริ้นเตอร์_แทงค์_ดั้ม', 'ปลั๊กไฟ', 'สายสัญญาณ_หลอดไฟ', 'กล่องใส่เอกสาร_ตะกร้าใส่เอกสาร_ลิ้นชักใส่เอกสาร',
    'ไม้ถู_ไม้ขนไก่_ไม้กวาด', 'ถังขยะ_ถังน้ำ_ตระกร้าต่างๆ', 'ถุงร้อน_ถุงขยะ_ด้าย_เข็ม', 'น้ำยาล้างห้องน้ำ_ถูพื้น_เช็ดกระจก_ซัลไลน์', 'แป้ง_สบู่_หลอดดูด_กระจก', 'แปรงฟัน_ยาสีฟัน_แก้วน้ำพลาสติก_ผ้าเช็ดหน้า',
    'แปรงฟัน_ยาสีฟัน_แก้วน้ำพลาสติก_ผ้าเช็ดหน้า', 'น้ำยาสปาคลีน', 'กีฬา_ของเล่น', 'สายสัญญาณ_สายแลน_พัดลม', 'กุญแจ', 'กรอบรูป', 'ธง', 'ป้าย_พลาสติก', 'ถ่าน_แบตเตอรลี่_ไฟฉาย',
    'กระติกน้ำร้อน_นาฬิกา_เครื่องเล่นDVD_เสียม_จอบ_บัว_กล่องรับสัญญาณ', 'ฟิวเจอร์บอร์ด_โฟม', 'กระดานไวท์บอร์ด_กระดานชานอ้อย', 'เคเบิ้ล_ไทน์', 'โทรศัพท์สำนักงาน', 'ยาสามัญ', 'Double_A']


  constructor(private service: ServicesComponent, private db: AngularFirestore) { }

  ngOnInit(): void {
    const db = getDatabase();
    var x
    this.stuff = "["

    const starCountRef = ref(db, 'รายการสินค้า/');
    onValue(starCountRef, (snapshot) => {
      this.All_data = snapshot.val();
      console.log(this.All_data)
      var x
      for (x in this.All_data) {
        console.log(this.All_data[x])
        var y
        for (y in this.All_data[x]) {
          let result = this.All_data[x][y].ID_Item.substring(3, 8);
          console.log(result)
          if (result == '00001' || result == '00002' || result == '00003' || result == '00004') {
            this.stuff = this.stuff + '{"ID_Item":"' + this.All_data[x][y].ID_Item + '",'
            this.stuff = this.stuff + '"Group_Item":"' + this.All_data[x][y].Group_Item + '",'
            this.stuff = this.stuff + '"Name_Item":"' + this.All_data[x][y].Name_Item + '",'
            this.stuff = this.stuff + '"Detail_Item":"' + this.All_data[x][y].Detail_Item + '",'
            this.stuff = this.stuff + '"Cost_Item":"' + this.All_data[x][y].Cost_Item + '",'
            this.stuff = this.stuff + '"Quantity_Item":"' + this.All_data[x][y].Quantity_Item + '",'
            this.stuff = this.stuff + '"Unit_Item":"' + this.All_data[x][y].Unit_Item + '",'
            this.stuff = this.stuff + '"Img_Item":"' + this.All_data[x][y].Img_Item + '"},'
          }
        }
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
  detailpage(ID: any){
    window.location.href ='http://localhost:4200/DetailItem?id='+ID    
  }
  
  writeUserData(value: any) {
    const db = getDatabase();
    set(ref(db, 'users/' + value.username), {
      username: value.username,
      first_name: value.first_name,
      profile_picture: value.last_name
    });
    alert('user created!')
  }
}
