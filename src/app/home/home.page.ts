import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weight: number = 0;
  height: number = 0;
  imc: number = 0;

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return;
    }

    this.imc = this.weight / (this.height * this.height);
    this.showIMC();
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - ${this.classificacao(this.imc)}`,
      duration: 3000,
      color: 'secondary',
    });

    toast.present();
  }

  classificacao(imc: number): string {
    if (imc < 18.5) {
      return 'Magresa';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 39.9) {
      return 'Obesidade';
    } else {
      return 'Obesidade Grave';
    }
  }
}
