import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProfile } from './edite-profile.component';

describe('EditeProfileComponent', () => {
  let component: EditeProfile;
  let fixture: ComponentFixture<EditeProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeProfile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
