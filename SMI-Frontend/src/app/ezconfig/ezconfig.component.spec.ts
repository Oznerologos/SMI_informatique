import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzconfigComponent } from './ezconfig.component';

describe('EzconfigComponent', () => {
  let component: EzconfigComponent;
  let fixture: ComponentFixture<EzconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
