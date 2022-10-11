import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStuffComponent } from './upload-stuff.component';

describe('UploadStuffComponent', () => {
  let component: UploadStuffComponent;
  let fixture: ComponentFixture<UploadStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
