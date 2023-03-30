import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
=======
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule]})

>>>>>>> dce87f2fd0756674269723f47edea1ba97fd4212
export class CoreModule {}
