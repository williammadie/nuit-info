import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableStereotypesComponent } from './draggable-stereotypes.component';

describe('DraggableStereotypesComponent', () => {
  let component: DraggableStereotypesComponent;
  let fixture: ComponentFixture<DraggableStereotypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableStereotypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableStereotypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
