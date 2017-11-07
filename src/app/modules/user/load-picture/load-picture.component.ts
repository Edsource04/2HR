import { Profile } from './../../models/profile';
import { Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'hr-load-picture',
  templateUrl: './load-picture.component.html',
  styleUrls: ['./load-picture.component.css']
})
export class LoadPictureComponent implements OnInit {
  userPicture: string = '';
  user: User;
  profile: Profile;
  pictureFile: File;
  @ViewChild('imgSrc') image_src;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    var loggedUser = JSON.parse(localStorage.getItem('actualUser'));
    if(loggedUser){
      this.profile = new Profile();

      this.user = loggedUser.user as User;
      this.userService.getProfile(this.user._id).subscribe((profile) => {
         this.profile._id = profile._id;
         this.profile.address = profile.address;
         this.profile.cellphone = profile.cellphone;
         this.profile.currentPosition = profile.currentPosition;
         this.profile.educations = profile.educations;
         this.profile.email = profile.email;
         this.profile.fullname = profile.fullname;
         this.profile.imgSrc = profile.imgSrc;
         this.profile.languages = profile.languages;
         this.profile.telephone = profile.telephone;
         this.profile.workExperiences = profile.workExperiences;
         this.userPicture = (profile.imgSrc as string);
      }, (error) => {
        console.log(error);
      });
      
    }else{
      this.userPicture = 'assets/loadPicture.jpg';
    }
    
  }

  loadPicture():void{
       var actualUser = JSON.parse(localStorage.getItem('actualUser'));
       const image = this.image_src.nativeElement;

       if(image.files && image.files[0]){
         this.pictureFile = image.files[0];
       }

       const formData: FormData = new FormData();
       formData.append('profile', this.profile._id as string);
       formData.append('email', actualUser.user.username);
       formData.append('imgSrc', this.pictureFile, this.pictureFile.name);

       this.userPicture = undefined;
       this.userService.loadPicture(formData).subscribe(pro => this.userPicture = pro.userPicture);



  }

}
