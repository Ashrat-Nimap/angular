import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDolistComponent } from './to-dolist/to-dolist.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ToDolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
