import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatListModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle the mode between light and dark', () => {
    // initial state
    expect(component.mod).toEqual('dark');
    expect(component.modc).toEqual('Dark');

    // toggle to light mode
    component.modToggle('light');
    expect(component.mod).toEqual('light');
    expect(component.modc).toEqual('Light');

    // toggle back to dark mode
    component.modToggle('dark');
    expect(component.mod).toEqual('dark');
    expect(component.modc).toEqual('Dark');
  });
});
