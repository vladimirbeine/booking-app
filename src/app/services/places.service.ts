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
      'https://imgur.com/gallery/7Wc71ci',
      145.99
    ),
    new Place(
      'p2',
      "Venise, quelle beaute",
      'Vous etes a venise, la ville flottante en Italie',
      'https://imgur.com/gallery/wnvpVft',
      165
    ),
    new Place(
      'p3',
      "Citadlle La Ferriere",
      'La 8e mervielle du monde se trouve en Haiti, la Citadelle',
      'https://imgur.com/gallery/7Wc71ci',
      178.99
    ),
    new Place(
      'p4',
      "Santiago",
      'Aqui estamos en Santiago de los Caballeros - La Republica Dominicana',
      'https://imgur.com/gallery/7Wc71ci',
      182.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
