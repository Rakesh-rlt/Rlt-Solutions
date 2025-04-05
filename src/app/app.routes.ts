import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { BuyNowPageComponent } from './component/buy-now-page/buy-now-page.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home',pathMatch:'full'},
    { path:'about', component:AboutComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent},
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'cart',component:CartPageComponent},
    {path:'buy',component:BuyNowPageComponent}
];
