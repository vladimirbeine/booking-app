import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadChildren: () => import('../../pages/places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('../../pages/places/offers/offers.module').then( m => m.OffersPageModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('../../pages/bookings/bookings.module').then( m => m.BookingsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
