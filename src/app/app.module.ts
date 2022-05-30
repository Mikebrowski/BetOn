import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ContentComponent } from './components/content/content.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ElementItemComponent } from './components/element-item/element-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddElementComponent } from './components/add-element/add-element.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
  {path:'', component: ElementsComponent},
  {path:'contact', component: ContactComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    ContentComponent,
    ElementsComponent,
    ElementItemComponent,
    AddElementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
