import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ImageUploadState } from 'src/store/reducers/image-upload-state';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private store: Store, private userService:UserService) {}
    title:string= "Add New Product"
    isActive = false;
    onSaveClick(): void {
      this.store.select(ImageUploadState.selectedImage).subscribe(selectedImage => {
        alert(`User Name: ${this.userService.getUserName() || 'No name provided'}\nSelected Image URL: ${selectedImage}`);
      });
    }
}
