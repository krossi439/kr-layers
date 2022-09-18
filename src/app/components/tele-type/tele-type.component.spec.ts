import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleTypeComponent } from './tele-type.component';

describe('TeleTypeComponent', () => {
  let component: TeleTypeComponent;
  let fixture: ComponentFixture<TeleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
