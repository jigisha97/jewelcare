import { SocialSharing } from "@ionic-native/social-sharing";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AddproductPage } from "../pages/addproduct/addproduct";
import { AddtocartPage } from "../pages/addtocart/addtocart";
import { BuyproductPage } from "../pages/buyproduct/buyproduct";
import { MyOrdersPage } from "../pages/my-orders/my-orders";
import { ViewproductPage } from "../pages/viewproduct/viewproduct";
import { UserLoginPage } from "../pages/user-login/user-login";
import { UserSignupPage } from "../pages/user-signup/user-signup";
import { ProductsPage } from "../pages/products/products";
import { FindOurStorePage } from "../pages/find-our-store/find-our-store";
import { FilterPage } from "../pages/filter/filter";
import { ProCatPage } from "../pages/pro-cat/pro-cat";
import { ViewProfilePage } from "../pages/view-profile/view-profile";
import { EditProfilePage } from "../pages/edit-profile/edit-profile";
import { EstimatePage } from "../pages/estimate/estimate";
import { FilteredPage } from "../pages/filtered/filtered";
import { PagesPopoverPage } from "../pages/pages-popover/pages-popover";
import { ViewAllReviewPage } from "../pages/view-all-review/view-all-review";
import { EditReviewPage } from "../pages/edit-review/edit-review";
import { WishlistPage } from "../pages/wishlist/wishlist";
import { BigImagePage } from "../pages/big-image/big-image";
import { LiveDemoPage } from "../pages/live-demo/live-demo";
import { MyLiveDemosPage } from "../pages/my-live-demos/my-live-demos";
import { ChangePasswordPage } from "../pages/change-password/change-password";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductDbProvider } from '../providers/product-db/product-db';
import { CategoryDbProvider } from '../providers/category-db/category-db';
import { UserDbProvider } from '../providers/user-db/user-db';
import { OrderDbProvider } from '../providers/order-db/order-db';
import { CartDbProvider } from '../providers/cart-db/cart-db';
import { ReviewDbProvider } from '../providers/review-db/review-db';
import { FilterDbProvider } from '../providers/filter-db/filter-db';
import { ProReviewPage } from "../pages/pro-review/pro-review";
import { pro_review } from "../shared/pro_review";
import { WishDbProvider } from '../providers/wish-db/wish-db';
import { Camera } from "@ionic-native/camera";
import { LiveDemoDbProvider } from '../providers/live-demo-db/live-demo-db';
import { ConfirmAddressPage } from "../pages/confirm-address/confirm-address";


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddproductPage,
    BuyproductPage,
    AddtocartPage,
    ViewproductPage,
    MyOrdersPage,
    UserLoginPage,
    UserSignupPage,
    ProductsPage,
    FindOurStorePage,
    FilterPage,
    ProCatPage,
    EditProfilePage,
    ViewProfilePage,
    EstimatePage,
    FilteredPage,
    PagesPopoverPage,
    ViewAllReviewPage,
    EditReviewPage,
    WishlistPage,
    BigImagePage,
    ProReviewPage,
    LiveDemoPage,
    MyLiveDemosPage,
    ConfirmAddressPage,
    ChangePasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddproductPage,
    BuyproductPage,
    AddtocartPage,
    ViewproductPage,
    MyOrdersPage,
    UserLoginPage,
    UserSignupPage,
    ProductsPage,
    FindOurStorePage,
    FilterPage,
    ProCatPage,
    EditProfilePage,
    ViewProfilePage,
    EstimatePage,
    FilteredPage,
    PagesPopoverPage,
    ViewAllReviewPage,
    EditReviewPage,
    WishlistPage,
    BigImagePage,
    ProReviewPage,
    LiveDemoPage,
    MyLiveDemosPage,
    ConfirmAddressPage,
    ChangePasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductDbProvider,
    CategoryDbProvider,
    UserDbProvider,
    OrderDbProvider,
    CartDbProvider,
    ReviewDbProvider,
    SocialSharing,
    FilterDbProvider,
    WishDbProvider,
    Camera,
    LiveDemoDbProvider,
    ScreenOrientation
  ]
})
export class AppModule {
  constructor(public screenOrientation: ScreenOrientation) {
    // Set orientation to portrait
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    // Disable orientation lock
    this.screenOrientation.unlock();
  }
}
