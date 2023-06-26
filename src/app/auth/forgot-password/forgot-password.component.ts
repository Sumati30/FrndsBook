import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ResetPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  forgot_password(f : NgForm){
    this.ResetPassword = true ;
  }

  reset_password(f : NgForm){
    
  }

}
