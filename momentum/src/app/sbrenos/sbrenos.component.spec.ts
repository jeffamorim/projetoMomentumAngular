import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbrenosComponent } from './sbrenos.component';

describe('SbrenosComponent', () => {
  let component: SbrenosComponent;
  let fixture: ComponentFixture<SbrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
