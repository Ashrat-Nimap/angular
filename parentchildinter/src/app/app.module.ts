import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListParentComponent } from './customer-list-parent/customer-list-parent.component';
import { CustomerFormChildComponent } from './customer-form-child/customer-form-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListParentComponent,
    CustomerFormChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
