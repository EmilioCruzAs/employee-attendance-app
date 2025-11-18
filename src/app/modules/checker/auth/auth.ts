import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth implements OnInit{
  public userName!:FormControl

  constructor(private fb:FormBuilder){
    this.userName =new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]
    )
  }

  ngOnInit(): void {}
  sendUser(){
    console.log(this.userName.value);
  }


}
