import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryConsoleComponent } from './entry-console.component';

describe('EntryConsoleComponent', () => {
  let component: EntryConsoleComponent;
  let fixture: ComponentFixture<EntryConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
