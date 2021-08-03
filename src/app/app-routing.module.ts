import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListComponent } from './shop/list/list.component';
import { ProfileComponent } from './shop/profile/profile.component';
import { ShoppingComponent } from './shop/shopping/shopping.component';
import { LogoComponent } from './shop/logo/logo.component';
import { LogoArtComponent } from './shop/logo-art/logo-art.component';

const routes: Routes = [
	{
		path:'login',
		component:LoginComponent	
	},
	{
		path:'register',
		component:RegisterComponent
	},
	{
		path:'shopping',
		component:ShoppingComponent	
	},
	{
		path:'profile',
		component:ProfileComponent
	},
	{
		path:'list',
		component:ListComponent
	},
	{
		path:'logo',
		component:LogoComponent
	},
	{
		path:'logo-art',
		component:LogoArtComponent
	},
	{
		path:'admin',
    	loadChildren: ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
	},
	{
		path:'',
		pathMatch:'full',
		redirectTo:'/profile'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
