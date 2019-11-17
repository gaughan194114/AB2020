import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItneraryContainerComponent } from './itnerary-container.component';

describe('ItneraryContainerComponent', () => {
  let component: ItneraryContainerComponent;
  let fixture: ComponentFixture<ItneraryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItneraryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItneraryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
