import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

const PLACEHOLDER_IMAGE: string = "../../assets/imgs/placeholder.png";
const SPINNER_IMAGE: string = "../../assets/imgs/spinner.gif";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private image = PLACEHOLDER_IMAGE;
  private undefineImage = PLACEHOLDER_IMAGE;
  private timestamp;
  private gallery=[];

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  private takePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.timestamp=Date.now();
        this.gallery.push({
          src:this.image,
          time:this.timestamp
        });
      } else {
        this.image = PLACEHOLDER_IMAGE;
        this.timestamp=0;
     } (err) => {
        this.image = PLACEHOLDER_IMAGE;
     }});
    this.image = SPINNER_IMAGE;

  }
}
