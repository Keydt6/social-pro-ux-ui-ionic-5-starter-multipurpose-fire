import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-welcome5',
  templateUrl: './welcome5.page.html',
  styleUrls: ['./welcome5.page.scss'],
})
export class Welcome5Page implements OnInit {

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
