import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Category',
      url: '/category',
      icon: 'basket'
    },
    {
      title: 'My Orders',
      url: '/my-orders',
      icon: 'heart'
    },
    {
      title: 'Promotions',
      url: '/promotions',
      icon: 'ribbon'
    },
    {
      title: 'About Jiyo',
      url: '/about-jiyo',
      icon: 'person'
    },
    {
      title: 'FAQs',
      url: '/faqs',
      icon: 'help'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'at'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'power'
    }

  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
