import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAsgnmntComponent } from './directives-asgnmnt.component';

describe('DirectivesAsgnmntComponent', () => {
  let component: DirectivesAsgnmntComponent;
  let fixture: ComponentFixture<DirectivesAsgnmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesAsgnmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAsgnmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
