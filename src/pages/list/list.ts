import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{id: number, title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, {
      'listID': item.id
    });
  }

  shareItem(item) {
    this.socialSharing.share("Check this item:  demoapp://demoapp/lists/" + item.id, item.title, item.note, item.icon)
    .then(() => {

    })
    .catch(() => {

    });
  }
}
