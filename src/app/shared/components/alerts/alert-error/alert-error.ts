import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-alert-error',
    templateUrl: './alert-error.html',
})
export class AlertError {

    @Input() title: string = "Error"
    @Input() message: string = ""
}