import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFile } from './new-file';

describe('NewFile', () => {
  let component: NewFile;
  let fixture: ComponentFixture<NewFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
