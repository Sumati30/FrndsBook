import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostServiceService } from '../../services/post-service.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openTextEditor: boolean = false;
  userPost: any = '';
  postValue: any = '';
  userInfo: any = [];

  constructor(private postService:PostServiceService, private config:ConfigService) { }

  ngOnInit(): void {
    this.userInfo = this.config.getUser();
    console.log(this.userInfo);
    console.log(this.userInfo.token)
  }

  profile_image(imageInput){
    console.log(imageInput)
  }

  open(){
    this.openTextEditor = true;
  }

  post(e){
    this.userPost = this.postValue;
    this.postService.postData(this.userPost, this.userInfo._id, this.userInfo.userName, this.userInfo.photoId, this.userInfo.isActive, this.userInfo.isAdmin ).subscribe(result => {
      console.log(result["message"]);
    })
   // console.log(e.target.value);
    this.openTextEditor = false;
    this.postValue = '';
  }

}
