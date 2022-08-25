import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/models/places.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  place: Place;

  constructor(
    private router: ActivatedRoute, private navCtlr: NavController, private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtlr.navigateBack('tabs/places/offers');
        return
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

}
