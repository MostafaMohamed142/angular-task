
export class UploadImage {
  static readonly type = '[ImageUpload] Upload Image';

  constructor(public payload: string) {}
}
