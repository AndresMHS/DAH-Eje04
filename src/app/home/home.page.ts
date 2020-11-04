import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [];

  constructor() {

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name: 'Andrés Haro',
      number: '3111656715',
      message: 'El más perrón aquí'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name: 'Manuel Almejo',
      number: '3113001816',
      message: 'Es admin'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name: 'Daniela Muñoz',
      number: '3111436719',
      message: '22 gatos y contando'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/129/129840.png',
      name: 'Daniel High',
      number: '3111226348',
      message: '¿Cómo esta el clima arriba?'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name: 'Martín Jimenez',
      number: '3111563507',
      message: 'Una reta o que'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name: 'Edwin Arellano',
      number: '3111180994',
      message: 'Un tiro o que'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name: 'Leopoldo Arciniega',
      number: '3111216030',
      message: 'Amo de las fiestas'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/129/129840.png',
      name: 'Israel Vizcaino',
      number: '3111220123',
      message: 'El master'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name: 'Oscar Navarro',
      number: '3111628786',
      message: 'Buscando información'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name: 'Saul Medrano',
      number: '3111740340',
      message: 'Unas carreritas o que'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name: 'Persona de Incognito',
      number: '3111843407',
      message: 'No sé'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/129/129840.png',
      name: 'Adriana Flores',
      number: '3112355816',
      message: 'Saca la botanita'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name: 'Enrique Ortiz',
      number: '3112576460',
      message: 'El quique'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/71/71748.png',
      name: 'Missael Lopez',
      number: '3112636307',
      message: 'Un caloduty'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/63/63699.png',
      name: 'Jonathan Lopez',
      number: '3113501207',
      message: 'El crack de cracks'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/129/129840.png',
      name: 'Persona de incognito',
      number: '3113830931',
      message: 'No lo sé'
    });

    this.contacts.push({
      image: 'https://image.flaticon.com/icons/png/128/56/56745.png',
      name: 'Martín Baez',
      number: '6871941615',
      message: 'Unas vueltas o que'
    });
  }

}
