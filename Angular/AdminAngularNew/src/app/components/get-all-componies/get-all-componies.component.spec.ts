import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllComponiesComponent } from './get-all-componies.component';

describe('GetAllComponiesComponent', () => {
  let component: GetAllComponiesComponent;
  let fixture: ComponentFixture<GetAllComponiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllComponiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllComponiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
