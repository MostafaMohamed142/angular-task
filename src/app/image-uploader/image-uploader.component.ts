import { Component, } from '@angular/core';
import { ImageUploadState, UploadImage } from 'src/store/reducers/image-upload-state';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {
  name: string = ''; 
  selectedOption=''
  constructor(private store: Store,private userService: UserService) {}
  onUserNameChange(): void {
    
    this.userService.setUserName(this.name);
  }
  @Select(ImageUploadState.selectedImage)
  selectedImage$!: Observable<string | null>;
 
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const Image = e.target?.result as string;
        this.store.dispatch(new UploadImage(Image));
      };

      reader.readAsDataURL(file);
  }
}
}
