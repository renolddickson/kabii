import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyComponent } from './lobby.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LobbyComponent', () => {
  let component: LobbyComponent;
  let fixture: ComponentFixture<LobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LobbyComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
