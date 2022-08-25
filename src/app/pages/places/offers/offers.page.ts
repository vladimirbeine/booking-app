import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/places.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

}
