import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComponent } from './tariff.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [ TariffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
