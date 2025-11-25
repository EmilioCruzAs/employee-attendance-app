import { Injectable } from "@angular/core";
import { inject } from "@angular/core";
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AlertError } from "../../shared/components/alerts/alert-error/alert-error";
@Injectable({
    providedIn: "root"
})
export class AlertService {
    private overlayRef?: OverlayRef;
    private overlay = inject(Overlay)
    constructor() { }


    openError(title: string, message: string) {

        this.overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global().top('20px').right('35px'),
            direction: "ltr"
        })
        const portal = new ComponentPortal(AlertError);
        const componentRef = this.overlayRef.attach(portal)
        componentRef.instance.title = title;
        componentRef.instance.message = message;
        setTimeout(() => {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.overlayRef.dispose();
                componentRef.destroy();
                this.overlayRef = undefined;
            }
        }, 6000)

    }



}