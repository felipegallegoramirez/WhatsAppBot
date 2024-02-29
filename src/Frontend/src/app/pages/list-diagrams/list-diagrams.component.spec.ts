import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiagramsComponent } from './list-diagrams.component';

describe('ListDiagramsComponent', () => {
  let component: ListDiagramsComponent;
  let fixture: ComponentFixture<ListDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDiagramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
