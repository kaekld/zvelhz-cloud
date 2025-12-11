import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFiles } from './recent-files';

describe('RecentFiles', () => {
  let component: RecentFiles;
  let fixture: ComponentFixture<RecentFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentFiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
