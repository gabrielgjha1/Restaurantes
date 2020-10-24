import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComidaComponent } from './crear-comida.component';

describe('CrearComidaComponent', () => {
  let component: CrearComidaComponent;
  let fixture: ComponentFixture<CrearComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
