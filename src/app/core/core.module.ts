import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
