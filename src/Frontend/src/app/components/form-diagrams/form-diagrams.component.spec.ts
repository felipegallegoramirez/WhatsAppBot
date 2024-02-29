import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiagramsComponent } from './form-diagrams.component';

describe('FormDiagramsComponent', () => {
  let component: FormDiagramsComponent;
  let fixture: ComponentFixture<FormDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDiagramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
