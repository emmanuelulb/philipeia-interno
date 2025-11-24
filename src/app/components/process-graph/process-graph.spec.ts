import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessGraph } from './process-graph';

describe('ProcessGraph', () => {
  let component: ProcessGraph;
  let fixture: ComponentFixture<ProcessGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
