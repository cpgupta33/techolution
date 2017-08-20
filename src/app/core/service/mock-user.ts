import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function mockUserFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
 
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
 
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
 
                // find if any user matches login credentials
                if (params.password == '123456') {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            username: params.username,
                            token: 'fake-jwt-token'
                        }
                    })));
                } else {
                    // else return 400 bad request
                    connection.mockError(new Error('Password is incorrect'));
                }
 
                return;
            }
 
            
            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
 
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let mockUserProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: mockUserFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
}