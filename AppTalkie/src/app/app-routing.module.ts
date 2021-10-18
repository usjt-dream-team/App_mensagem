import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rotas das paginas login / signup
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// link abaixo mostra como usar as rotas e ir direto para
// o component exato (eu espero pelo menos =/)
//https://balta.io/blog/angular-rotas-guardas-navegacao
