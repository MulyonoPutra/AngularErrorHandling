import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Component({
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.css' ]
})
export class PageComponent {
  name = 'Angular';

  data: any;
  error: any;

  constructor(private httpClient: HttpClient) {
  }

  success200() {
    this.data = undefined;
    this.error = undefined;

    this.httpClient.get('https://api.github.com/users/octocat/orgs').subscribe((response: any) => {
      console.log('success200 SUCCESS');
      this.data = [1,2,3];
    });
  }

  error200() {
    this.data = undefined;
    this.error = undefined;

    this.httpClient.get('https://api.github.com/users/octocat/orgs').subscribe((response: any) => {
      console.log('error200 SUCCESS');
      /// simulate error
      // response will contain an error key
      const fakeResponse = {
        error: {
          messages: [
            {
              id: 'IDERROR_1',
              message: 'this is an error/warning with a 200 in the component'
            }
          ]
        },
        data: undefined
      }
      this.error = fakeResponse.error.messages[0].message;
    });
    
  }
  
  errorHttp404() {
    this.data = undefined;
    this.error = undefined;

    // fake 404 in real stasus: 0
    this.httpClient.get('https://32222222')
    .subscribe(
      () => {
        console.log('errorHttp404 SUCCESS');
      },
      (err) => {
        console.log('errorHttp404 ERROR', err);
        this.error = '404 ERROR in component';
      });
  }

  errorHttp40XAAnd50X() {
    this.data = undefined;
    this.error = undefined;

    this.httpClient.get('https://apierror.free.beeceptor.com').subscribe(
      () => console.log('errorHttp40XAAnd50X SUCCESS'),
      () => console.log('errorHttp40XAAnd50X ERROR'));
  }

  errorTimeout() {
    this.data = undefined;
    this.error = undefined;

    this.httpClient.get('https://32222222')
      .pipe(timeout(2000))
      .subscribe(
      () => {
        console.log('errorTimeout SUCCESS');
      },
      () => {
        console.log('errorTimeout ERROR');
        this.error = 'Timeout ERROR in component';
      });
  }

  //etc...
}
