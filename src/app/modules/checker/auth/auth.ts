import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clock } from "./components/clock/clock";
import { ModalService } from '../../../core/services/modal.service';
import { Alert } from '../../../shared/components/alert/alert';
import { SuccessCheck } from './components/dialogs/success-check/success-check';
import { ModalConfigModel } from '../../../core/models/modal.interface';

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
    private modalService: ModalService
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
      this.typeAuth = 1,
        this.step = 1
    }, 1200);
  }

  sendPassWord() {
    this.loading = true
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


}
