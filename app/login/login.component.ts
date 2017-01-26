import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['login.style.css']
})
export class ApplicationLoginComponent implements OnInit {
    constructor() { 
        console.log("Login component created");
    }

    ngOnInit() { }
}