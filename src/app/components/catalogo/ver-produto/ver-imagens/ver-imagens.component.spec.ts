import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerImagensComponent } from './ver-imagens.component';

describe('VerImagensComponent', () => {
  let component: VerImagensComponent;
  let fixture: ComponentFixture<VerImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
