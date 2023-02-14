import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedInformationComponent } from './breed-information.component';

describe('BreedInformationComponent', () => {
  let component: BreedInformationComponent;
  let fixture: ComponentFixture<BreedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
