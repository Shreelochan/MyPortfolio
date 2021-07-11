import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopViewComponent } from './home-top-view.component';

describe('HomeTopViewComponent', () => {
  let component: HomeTopViewComponent;
  let fixture: ComponentFixture<HomeTopViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
