import { Dialog } from '@angular/cdk/dialog'
import { ComponentType } from '@angular/cdk/portal'
import { inject, Injectable } from '@angular/core'
import { ModalConfigModel } from '../models/modal.interface'

@Injectable({ providedIn: "root" })

export class ModalService {

    private dialog = inject(Dialog)
    constructor() { }
    open(component: ComponentType<any>, config: ModalConfigModel<any>) {
        this.dialog.open(component, {
            disableClose: true,
            ...config,
            restoreFocus: true,

        })
    }

    closeAll() {
        this.dialog.closeAll()
    }







}