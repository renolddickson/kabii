import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})

export class CoreModule {}
