import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemDetailsComponent } from './dashboard-item-details.component';

describe('DashboardItemDetailsComponent', () => {
  let component: DashboardItemDetailsComponent;
  let fixture: ComponentFixture<DashboardItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
