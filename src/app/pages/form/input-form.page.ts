import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {

  constructor() { }
  nombre:string='';

  personas={
    correo:'',
    contrasenna:''
  }

  ngOnInit() {
  }

}


