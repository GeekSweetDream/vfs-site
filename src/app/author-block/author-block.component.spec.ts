import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBlockComponent } from './author-block.component';

describe('AuthorBlockComponent', () => {
  let component: AuthorBlockComponent;
  let fixture: ComponentFixture<AuthorBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
