import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { UploadStuffComponent } from './upload-stuff/upload-stuff.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', redirectTo:'Homepage',pathMatch:'full'
  },
  { path: 'Homepage', component: HomepageComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'UploadStuff', component: UploadStuffComponent },
  { path: 'DetailItem', component: DetailItemComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
