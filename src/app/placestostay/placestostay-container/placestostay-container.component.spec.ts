import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacestostayContainerComponent } from './placestostay-container.component';

describe('PlacestostayContainerComponent', () => {
  let component: PlacestostayContainerComponent;
  let fixture: ComponentFixture<PlacestostayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacestostayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacestostayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
