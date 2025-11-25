import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clock } from "./components/clock/clock";
import { ModalService } from '../../../core/services/modal.service';
import { SuccessCheck } from './components/dialogs/success-check/success-check';
import { ModalConfigModel } from '../../../core/models/modal.interface';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-auth',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Clock,
    FormsModule
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  providers: [
    DatePipe
  ]
})
export class Auth implements OnInit {
  public userName!: FormControl
  public typeAuth!: number
  public pwd!: string;
  public step: number = 0;
  public loading = false;
  public pwdShow = false

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private alertService: AlertService
  ) {
    this.userName = new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]
    )
  }

  ngOnInit(): void { }

  sendUser() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.typeAuth = 2,
        this.step = 2
    }, 1200);

    setTimeout(() => {
      this.senFingerPrint()
    }, 1200);
  }

  sendPassWord() {
    this.loading = true
    setTimeout(() => { this.loading = false; this.openAlertError() },
      1800);

  }

  senFingerPrint() {
    this.loading = true;
    setTimeout(() => { this.loading = false; this.openSuccessDialog() },
      1800);
  }


  togglePassword() {
    this.pwdShow = !this.pwdShow
  }

  reset() {
    this.step = 0
    this.userName.reset();
    this.pwd = "";
  }

  openSuccessDialog() {
    this.modalService.open(SuccessCheck, {
      data: {
        message: 'HORA DE SALIDA REGISTRADA CON EXITO',
      } as ModalConfigModel<{ message: string }>
    })
  }

  openAlertError() {
    this.alertService.openError('Incidencia al autenticar', 'El usuario no se encuentra registrado')
  }


}


