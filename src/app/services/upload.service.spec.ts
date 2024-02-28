import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UploadService } from './upload.service';

describe('UploadService', () => {
  let service: UploadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UploadService]
    });
    service = TestBed.inject(UploadService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should upload an image', () => {
    const mockFile = new File(['file contents'], 'arquivo.jpg', { type: 'image/jpeg' });

    service.uploadImage(mockFile).subscribe(response => {
      expect(response).toBeTruthy();
      
    });

    const request = httpMock.expectOne('https://api.imgur.com/3/image');
    expect(request.request.method).toBe('POST');
    request.flush({ success: true }); 
  });

  it('should create a gallery', () => {
    service.createGallery(['image1ID', 'image2ID']).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const request = httpMock.expectOne('https://api.imgur.com/3/gallery');
    expect(request.request.method).toBe('POST');
    request.flush({ success: true }); 
  });
});
