import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchfunctionComponent } from './component/searchfunction/searchfunction.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SenderComponent } from './component/sender/sender.component';
import { ReciverComponent } from './component/reciver/reciver.component';
import { SecondReciverComponent } from './component/second-reciver/second-reciver.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchfunctionComponent,
    SenderComponent,
    ReciverComponent,
    SecondReciverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
