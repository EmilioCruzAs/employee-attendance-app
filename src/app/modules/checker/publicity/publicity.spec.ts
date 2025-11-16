import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicity } from './publicity';

describe('Publicity', () => {
  let component: Publicity;
  let fixture: ComponentFixture<Publicity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
