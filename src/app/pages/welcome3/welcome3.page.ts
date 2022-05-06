import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-welcome3',
  templateUrl: './welcome3.page.html',
  styleUrls: ['./welcome3.page.scss'],
})
export class Welcome3Page implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {

  }

}
