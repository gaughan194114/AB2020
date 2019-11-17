import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingstodoContainerComponent } from './thingstodo-container.component';

describe('ThingstodoContainerComponent', () => {
  let component: ThingstodoContainerComponent;
  let fixture: ComponentFixture<ThingstodoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingstodoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingstodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
