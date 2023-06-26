import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private config:ConfigService, private http:HttpClient) {
    
   }
  
  userInfo : any = [];
  

  postData(msg, id, name, photoId, active, admin){
    this.userInfo = this.config.getUser();
    console.log("Inside post service",this.userInfo);

    console.log("Inside post service",this.userInfo.token);
    let newPost = {
      "post" : msg,
      "userId" : id,
      "userName" : name,
      "userPhotoId" : photoId,
      "postImageId" : "",
      "isActive" : active,
      "isAdmin":  admin,
      "profession" : ""
    }

    var options = {
      headers : new HttpHeaders ({
         "Content-Type" : "application/json",
         "Authorization" : this.userInfo.token
          
      })
    }
   return this.http.post<Post>(this.config.baseURL + 'posts/createpost' , newPost, options)
  }
}
