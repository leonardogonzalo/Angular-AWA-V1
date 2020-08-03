import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaficticioComponent } from './cargaficticio.component';

describe('CargaficticioComponent', () => {
  let component: CargaficticioComponent;
  let fixture: ComponentFixture<CargaficticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaficticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaficticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
