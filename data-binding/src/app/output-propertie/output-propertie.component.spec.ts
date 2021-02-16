import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertieComponent } from './output-propertie.component';

describe('OutputPropertieComponent', () => {
  let component: OutputPropertieComponent;
  let fixture: ComponentFixture<OutputPropertieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
