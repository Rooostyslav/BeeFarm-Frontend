import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { BeeGardenComponent } from './bee-garden/bee-garden.component';

const routes: Routes = [
  { path: '', redirectTo: 'sing-in', pathMatch: 'full'},
  { path: 'sing-in', component: SingInComponent },
  { path: 'sing-up', component: SingUpComponent },
  { path: 'bee-garden', component: BeeGardenComponent }

  //{ path: 'wallets/my', component: WalletMyComponent, canActivate: [AuthGuard]},
  //{ path: 'log-in', component: SignInComponent },
  //{ path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
