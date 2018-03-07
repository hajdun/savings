import { TestBed, inject, async } from '@angular/core/testing';
import { CostItemService } from './cost-item.service';
import { HttpClient, HttpClientModule, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CostItemService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CostItemService]
    });

    const service: CostItemService = TestBed.get(CostItemService);

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<any[]>('/api/asd').subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('/api/asd');

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });


  it('can test HttpClient.get', () => {
    const testData: any = [
      {
        '_id': '5a7b387a445d88434c9d22c6', 'itemBoughtRegularness': false,
        'itemBoughtDate': '2018-02-19', 'itemAmount': 2, 'unitPrice': 249,
        'itemName': 'butter', '__v': 0,
        'itemCategory': { 'categoryColor': '#4169E1', 'categoryName': 'Food > Dairy product' }
      },
      {
        '_id': '5a7b38a5445d88434c9d22c7', 'itemBoughtRegularness': false,
        'itemBoughtDate': '2018-02-13', 'itemAmount': 0.876, 'unitPrice': 1600,
        'itemName': 'chicken breast', '__v': 0,
        'itemCategory': { 'categoryColor': 'red', 'categoryName': 'Food > Meat' }
      },
    ];
    // Make an HTTP GET request
    httpClient.get<any>('/api/allCostItems')
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/api/allCostItems');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  });

});

