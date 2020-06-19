import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlistviewComponent } from './qlistview.component';

describe('QlistviewComponent', () => {
  let component: QlistviewComponent;
  let fixture: ComponentFixture<QlistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
