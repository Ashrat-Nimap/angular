import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CourseDetailListComponent } from './course-detail-list/course-detail-list.component';
import { counterreducer } from './store/reducer/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count : counterreducer})
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
