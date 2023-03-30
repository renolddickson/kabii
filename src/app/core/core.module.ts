import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './components/lobby/lobby.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
<<<<<<< HEAD
=======

>>>>>>> 23904250d315a878e2afe5619c09f9e883aade10
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LobbyComponent, NavbarComponent, MainComponent],
<<<<<<< HEAD
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
=======
  imports: [CommonModule, MaterialModule, ReactiveFormsModule]
>>>>>>> 23904250d315a878e2afe5619c09f9e883aade10
})
export class CoreModule {}
