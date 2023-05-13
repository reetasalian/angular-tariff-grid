import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a mocked http GET request', (done: DoneFn) => {
    const service: TariffService = TestBed.get(TariffService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const mockResponse = {
      name: 'Premium',
      id: 3,
      benefits: [
        'Unlimited data',
        'Free router',
        'Premium customer support',
        '5G connectivity',
      ],
      price: 79.99,
      download: 50,
      upload: 20,
    };

    service.getTariffData().subscribe((tariff: any) => {
      expect(tariff).toBeTruthy();
      expect(tariff.id).toBe(mockResponse.id);
      expect(tariff.name).toBe(mockResponse.name);
      expect(tariff.price).toBe(mockResponse.price);
      expect(tariff.download).toBe(mockResponse.download);
      expect(tariff.upload).toBe(mockResponse.upload);
      done();
    });

    const mockRequest = httpMock.expectOne('http://localhost:4200/tariffs');

    // Assert that the request is a GET.
    expect(mockRequest.request.method).toEqual('GET');
    mockRequest.flush(mockResponse);
  });
});
