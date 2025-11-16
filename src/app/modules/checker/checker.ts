import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector:'app-checker',
    imports:[
        CommonModule
    ],
    templateUrl:'./checker.html',
})
export class Checker {
    public sayHello(){  
        console.log("sayChello");
        
    }
}