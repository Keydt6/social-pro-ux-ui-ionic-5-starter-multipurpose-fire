import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-welcome6',
  templateUrl: './welcome6.page.html',
  styleUrls: ['./welcome6.page.scss'],
})
export class Welcome6Page implements OnInit {

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
