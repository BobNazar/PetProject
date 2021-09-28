import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
{
  path: '',
  component: UsersComponent
},
{
  path: 'users',
  component: UsersComponent
},
{
  path: 'features/:id/:username',
  component: UserInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
