import { DialogRef } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

@Component({
    imports: [
        CommonModule
    ],
    templateUrl: './success-check.html'
})
export class SuccessCheck {
    private dialogRef = inject(DialogRef)
    public closing = false;
    public data: { message: string }
    constructor() {
        this.data = this.dialogRef.config.data as { message: string }
        // setTimeout(() => {
        //     this.close()
        // }, 3000)
    }


    close() {
        this.closing = true
        setTimeout(() => {
            this.dialogRef.close()
        }, 150)
    }
}