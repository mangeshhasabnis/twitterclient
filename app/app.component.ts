import { Component } from '@angular/core';

import { Input } from '@angular/core'

@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.css']
})
export class AppComponent { 
    
    constructor() {
        console.log('Constructing App Component');
    }

}