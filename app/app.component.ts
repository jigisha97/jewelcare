import { Component, ViewChild } from '@angular/core';
import { Storage } from "@ionic/storage";
//import { login } from "../shared/login";

import { Platform, MenuController, Nav,Events } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
//import { ListPage } from '../pages/list/list';
import { UserLoginPage } from "../pages/user-login/user-login";
import { MyOrdersPage } from "../pages/my-orders/my-orders";
import { AddtocartPage } from "../pages/addtocart/addtocart";
import { ProductsPage } from "../pages/products/products";
import { FindOurStorePage } from "../pages/find-our-store/find-our-store";
import { ViewProfilePage } from "../pages/view-profile/view-profile";
import { EstimatePage } from "../pages/estimate/estimate";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { LiveDemoPage } from '../pages/live-demo/live-demo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any, icon: any }>;
  public email: string;
  email1:string;
  flag: number = 0;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public events:Events
  ) {

    this.storage.get("email").then((val)=>{
      this.email1=val;
      console.log("andar "+this.email1);
    });
    console.log(this.email1);
    //this.email1=localStorage.getItem("email");
    
    console.log(localStorage.getItem("email"));


    this.events.subscribe("keyur",(x,y)=>{
      
      this.email = x;
      
      if (this.email != null) {

        this.pages = [
          { title: 'Home', component: HelloIonicPage, icon: 'ios-home' },
          { title: 'All Jewelleries', component: ProductsPage, icon: 'albums' },
          { title: 'My Cart', component: AddtocartPage, icon: 'cart' },
          { title: 'Wishlist', component: WishlistPage, icon: 'heart' },
          { title: 'Orders', component: MyOrdersPage, icon: 'checkmark-circle-outline' },
          { title: 'Want Live Demo?', component: LiveDemoPage, icon: 'eye' },
          { title: 'My Profile', component: ViewProfilePage, icon: 'contact' },
          { title: 'Estimation', component: EstimatePage, icon: 'calculator' },
          { title: 'Find Our Store', component: FindOurStorePage, icon: 'pin' }
        ];
        
      }
      else {
      //alert(this.email);
        this.pages = [
          { title: 'Home', component: HelloIonicPage, icon: 'ios-home' },
          { title: 'All Jewelleries', component: ProductsPage, icon: 'folder-open' },
          { title: 'My Cart', component: UserLoginPage, icon: 'cart' },
          { title: 'Wishlist', component: UserLoginPage, icon: 'heart' },
          { title: 'Orders', component: UserLoginPage, icon: 'checkmark-circle-outline' },
          { title: 'Log In', component: UserLoginPage, icon: 'log-in' },
          { title: 'Find Our Store', component: FindOurStorePage, icon: 'pin' }
        ];  
      }
      
    });
    // set our app's pages

   // this.storage.get('email').then((value) => {

        
      console.log("e : " +this.email);
      //alert("email :" + this.email + "b");
      
      if (localStorage.getItem("email") == undefined) {

        this.pages = [
          { title: 'Home', component: HelloIonicPage, icon: 'ios-home' },
          { title: 'All Jewelleries', component: ProductsPage, icon: 'folder-open' },
          { title: 'My Cart', component: UserLoginPage, icon: 'cart' },
          { title: 'Wishlist', component: UserLoginPage, icon: 'heart' },
          { title: 'Orders', component: UserLoginPage, icon: 'checkmark-circle-outline' },
          { title: 'Log In', component: UserLoginPage, icon: 'log-in' },
          { title: 'Find Our Store', component: FindOurStorePage, icon: 'pin' }
        ];
        
      }
      else {
      //  alert(this.email);
        this.pages = [
          { title: 'Home', component: HelloIonicPage, icon: 'ios-home' },
          { title: 'All Jewelleries', component: ProductsPage, icon: 'albums' },
          { title: 'My Cart', component: AddtocartPage, icon: 'cart' },
          { title: 'Wishlist', component: WishlistPage, icon: 'heart' },
          { title: 'Orders', component: MyOrdersPage, icon: 'checkmark-circle-outline' },
          { title: 'Want Live Demo?', component: LiveDemoPage, icon: 'eye' },
          { title: 'My Profile', component: ViewProfilePage, icon: 'contact' },
          { title: 'Estimation', component: EstimatePage, icon: 'calculator' },
          { title: 'Find Our Store', component: FindOurStorePage, icon: 'pin' }
        ];
          
      }
    //});
    this.initializeApp();
  }

ionViewDidLoad(){
  
}


  initializeApp() {
    //alert("initial");
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    //alert("openpage");
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
