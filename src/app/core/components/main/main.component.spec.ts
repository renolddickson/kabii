import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [MatIconModule, MatDividerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('showProfile', () => {
    expect(component.showRight).toEqual(false);
    component.showProfile();
    expect(component.showProfile).toBeDefined;
    expect(component.showRight).toEqual(true);
  });
});
