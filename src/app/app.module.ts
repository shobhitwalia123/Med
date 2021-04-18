import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';


import { AppComponent } from './app.component';
import { ViewmedicineComponent } from './Component/viewMedicine.component';
import { MedicineListComponent} from './Component/medicinelist.component';
import { DataService } from './Service/medicine.servie';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const routes: Routes = [
  { path: 'medicine', component: ViewmedicineComponent },
  { path: '', component: MedicineListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewmedicineComponent,
    MedicineListComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule,FormsModule,AngularFontAwesomeModule
  ],
  exports: [RouterModule],
  providers: [
    DataService,
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
