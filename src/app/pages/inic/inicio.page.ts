import { Component, OnInit } from '@angular/core';


interface componentes{
  nombre:string,
  icono:string,
  redireccionamiento:string
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  componentesredic:componentes[]=[
    {
      nombre:'Alerta',
      icono:'alert-circle-outline',
      redireccionamiento:'/alertas'
    },
    {
      nombre:'Imput Form',
      icono:'hammer-outline',
      redireccionamiento:'/input-form'
    }
  ]

}
