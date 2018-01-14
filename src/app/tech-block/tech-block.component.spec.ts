import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlockComponent } from './tech-block.component';

describe('TechBlockComponent', () => {
  let component: TechBlockComponent;
  let fixture: ComponentFixture<TechBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
