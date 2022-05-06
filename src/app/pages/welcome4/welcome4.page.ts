import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-welcome4',
  templateUrl: './welcome4.page.html',
  styleUrls: ['./welcome4.page.scss'],
})
export class Welcome4Page implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This is a toast message! :)',
      duration: 2000,
      color: "secondary"
    });
    toast.present();
  }

  ngOnInit() {
  }

}
