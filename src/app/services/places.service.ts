import { Injectable } from '@angular/core';
import { Place } from '../models/places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      "Ici c'est Paris",
      'Bienvenue dans la ville lumiere, Paris - France',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      145.99
    ),
    new Place(
      'p2',
      "Venise, quelle beaute",
      'Vous etes a venise, la ville flottante en Italie',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      165
    ),
    new Place(
      'p3',
      "Citadlle La Ferriere",
      'La 8e mervielle du monde se trouve en Haiti, la Citadelle',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      178.99
    ),
    new Place(
      'p4',
      "Santiago",
      'Aqui estamos en Santiago de los Caballeros - La Republica Dominicana',
      'https://images.prismic.io/ionicframeworkcom/dc70a9c1-eb1f-4e1a-8a89-ab6db635caba_book-hybrid-vs-native%402x.png?auto=compress,format',
      182.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
