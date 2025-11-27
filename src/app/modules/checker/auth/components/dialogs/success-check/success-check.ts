import { DialogRef } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { ThemeService } from "../../../../../../core/services/theme.service";
@Component({
    imports: [
        CommonModule
    ],
    templateUrl: './success-check.html'
})
export class SuccessCheck {
    private dialogRef = inject(DialogRef)
    private themeService = inject(ThemeService)
    public closing = false;
    public data: { message: string }
    @ViewChild('root', { static: true }) rootElement!: ElementRef;

    constructor() {
        this.data = this.dialogRef.config.data as { message: string }
        setTimeout(() => {
            this.close()
        }, 3000)
    }


    ngAfterViewInit() {
        this.rootElement.nativeElement.setAttribute(
            'data-theme',
            this.themeService.getTheme()
        );
    }
    close() {
        this.closing = true
        setTimeout(() => {
            this.dialogRef.close()
        }, 150)
    }
}