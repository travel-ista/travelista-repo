import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveltipsComponent } from './traveltips.component';

describe('TraveltipsComponent', () => {
  let component: TraveltipsComponent;
  let fixture: ComponentFixture<TraveltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraveltipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraveltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
