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
      header:'ALERTA - FORMULARIO',
      buttons:[
        {
          text:'Cancel',
          role:'Cancel' 
        },
        {
          text:'OK'
        }
      ],
      inputs:[
        {
          type:'text',
          placeholder:'ulises'
        },
        {
          type:'text',
          placeholder:'ramos'
        },
        {
          type:'text',
          placeholder:'Descripción Materna'
        },
        {
          type:'url',
          placeholder:'https://youtube.com'
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
          placeholder:'edad'
        }
      ]

    });
    (await alertas).present();

    
  }




}
