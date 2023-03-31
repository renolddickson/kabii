import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './core/components/lobby/lobby.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MainComponent } from './core/components/main/main.component';
import { GroupChatComponent } from './core/components/group-chat/group-chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/lobby', pathMatch: 'full' },
  { path: 'lobby', component: LobbyComponent },
  {
    path: 'nav',
    component: NavbarComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'group', component: GroupChatComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
