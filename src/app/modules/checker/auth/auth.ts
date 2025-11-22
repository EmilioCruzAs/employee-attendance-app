import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clock } from "./components/clock/clock";

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
  providers:[
    DatePipe
  ]
})
export class Auth implements OnInit {
  public userName!: FormControl
  public typeAuth!:number
  public pwd!:string;
  public step:number = 0;
  public loading = false;

  public pwdShow=  false

  constructor(private fb: FormBuilder) {
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
    setTimeout(() => { this.loading = false; this.typeAuth=2, this.step=2}, 1200);
  }

  senPassWord(){
    this.loading=true
    setTimeout(() => { this.loading = false; }, 1200);

  }

  togglePassword(){
    this.pwdShow = !this.pwdShow    
  }

  reset(){
    this.step =0
    this.userName.reset();
    this.pwd="";
  }


}
