import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApplicationLoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ApplicationLoginComponent,
        AppComponent
        
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
    constructor() {
        console.log('Constructing App Module');
    }
} 