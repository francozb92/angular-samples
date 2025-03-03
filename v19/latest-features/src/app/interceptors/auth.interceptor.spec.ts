import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor'; // Assuming your interceptor is in auth.interceptor.ts

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(
            withInterceptorsFromDi()),
        provideHttpClientTesting(),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    localStorage.clear(); // Clear local storage before each test
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that there are no outstanding requests.
  });

  it('should add an Authorization header when a token is present', () => {
    localStorage.setItem('auth_token', 'test_token');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.get('Authorization')).toBe('Bearer test_token');
    req.flush({}); // Respond to the request
  });

  it('should not add an Authorization header when no token is present', () => {
    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('should handle 401 Unauthorized errors', () => {
    spyOn(console, 'error'); // Spy on console.error to check if it's called

    httpClient.get('/test').subscribe(
      () => fail('should have failed with 401 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(401);
        expect(console.error).toHaveBeenCalled(); // Check if console.error was called
      }
    );

    const req = httpTestingController.expectOne('/test');
    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
  });

  it('should handle other HTTP errors', () => {
    httpClient.get('/test').subscribe(
      () => fail('should have failed with 500 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpTestingController.expectOne('/test');
    req.flush('Internal Server Error', { status: 500, statusText: 'Internal Server Error' });
  });

  it('should log the request', () => {
    spyOn(console, 'log');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(console.log).toHaveBeenCalled();
    req.flush({});
  });
});