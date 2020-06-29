import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPostagemComponent } from './excluir-postagem.component';

describe('ExcluirPostagemComponent', () => {
  let component: ExcluirPostagemComponent;
  let fixture: ComponentFixture<ExcluirPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
