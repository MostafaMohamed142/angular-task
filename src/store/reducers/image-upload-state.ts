// image-upload.state.ts
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { ImageUploadStateModel } from '../interfaces';




export class UploadImage {
  static readonly type = '[ImageUpload] Upload Image';

  constructor(public payload: string) {}
}

@State<ImageUploadStateModel>({
  name: 'imageUpload',
  defaults: {
    selectedImage: null
  }
})
export class ImageUploadState {
  @Selector()
  static selectedImage(state: ImageUploadStateModel) {
    return state.selectedImage;
  }

  @Action(UploadImage)
  uploadImage(ctx: StateContext<ImageUploadStateModel>, { payload }: UploadImage) {
    ctx.patchState({
      selectedImage: payload
    });
  }
}
