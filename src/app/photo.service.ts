import { Injectable } from "@angular/core";
import {
  Plugins,
  CameraResultType,
  Capacitor,
  FilesystemDirectory,
  CameraPhoto,
  CameraSource
} from "@capacitor/core";

@Injectable()
export class PhotoService {
  constructor() {}

  public async addNewToGallery() {
    console.log("servico");
    // Take a photo
    const capturedPhoto = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
