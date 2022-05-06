import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'SignIn',
      url: '/signin',
      icon: 'list'
    },

    {
      title: 'SignUp',
      url: '/signup',
      icon: 'list'
    },
    {
      title: 'Profile2',
      url: '/profile2',
      icon: 'list'
    },
    {
      title: 'Profile4',
      url: '/profile4',
      icon: 'list'
    },
    {
      title: 'Welcome',
      url: '/welcome',
      icon: 'list'
    },
    {
      title: 'Welcome 2',
      url: '/welcome2',
      icon: 'list'
    },
    {
      title: 'Welcome 3',
      url: '/welcome3',
      icon: 'list'
    },
    {
      title: 'Welcome 4',
      url: '/welcome4',
      icon: 'list'
    },
    {
      title: 'Welcome 5',
      url: '/welcome5',
      icon: 'list'
    },
    {
      title: 'Welcome 6',
      url: '/welcome6',
      icon: 'list'
    },
    {
      title: 'Onboarding',
      url: '/onboarding',
      icon: 'list'
    },
    {
      title: 'Discover',
      url: '/discover',
      icon: 'list'
    },
    {
      title: 'Feeds',
      url: '/feeds',
      icon: 'list'
    },
    {
      title: 'Feeds2',
      url: '/feeds2',
      icon: 'list'
    },
    {
      title: 'Updates',
      url: '/updates',
      icon: 'list'
    },
    {
      title: 'Updates 2',
      url: '/updates2',
      icon: 'list'
    },
    {
      title: 'Updates 3',
      url: '/updates3',
      icon: 'list'
    },
    
  ];


  public firebasePages = [    
    {
      title: 'Activity',
      url: '/activity',
      icon: 'list'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'list'
    },
    {
      title: 'Dashboard Posts',
      url: '/dashboard/posts',
      icon: 'list'
    },
    {
      title: 'Dashboard Users',
      url: '/dashboard/users',
      icon: 'list'
    },
    {
      title: 'Dashboard Categories',
      url: '/dashboard/categories',
      icon: 'list'
    }
  ];

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
}
 