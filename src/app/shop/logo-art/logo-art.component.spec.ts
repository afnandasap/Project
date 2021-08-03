import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArtComponent } from './logo-art.component';

describe('LogoArtComponent', () => {
  let component: LogoArtComponent;
  let fixture: ComponentFixture<LogoArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
