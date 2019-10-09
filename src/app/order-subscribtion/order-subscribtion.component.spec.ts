import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSubscribtionComponent } from './order-subscribtion.component';

describe('OrderSubscribtionComponent', () => {
  let component: OrderSubscribtionComponent;
  let fixture: ComponentFixture<OrderSubscribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSubscribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
