import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private ctr:AlertController) { }

  ngOnInit() {
  }

  abrirInput(){
    this.presentAlertForm();
  }

  async presentAlertForm(){
    const alertas = this.ctr.create({
      header:'Datos para Ingresar',
      buttons:[
        {
          text:'Cancelar',
          role:'Cancel' 
        },
        {
          text:'Ok',
          role:'Cancel'
        }
      ],
      inputs:[
        {
          type:'text',
          placeholder:'Nombres'
        },
        {
          type:'text',
          placeholder:'Apellido'
        },
        {
          type:'text',
          placeholder:'Descripción Materna'
        },
        {
          type:'url',
          placeholder:'URL'
        },
        {
          type:'date'
        },
        {
          type:'text',
          placeholder:'Clave'
        },
        {
          type:'text',
          placeholder:'Nick-Name'
        },
        {
          type:'number',
          placeholder:'Edad'
        }
      ]

    });
    (await alertas).present();

    
  }




}
