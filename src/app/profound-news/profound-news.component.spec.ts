import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfoundNewsComponent } from './profound-news.component';

describe('ProfoundNewsComponent', () => {
  let component: ProfoundNewsComponent;
  let fixture: ComponentFixture<ProfoundNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfoundNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfoundNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
