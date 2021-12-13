import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: [ './http-error.component.css' ]
})
export class HttpErrorComponent implements OnInit {
  status: string;

  constructor(private activatedRoute: ActivatedRoute,
  private router: Router) {

  }

  ngOnInit() {
    this.status = this.activatedRoute.snapshot.queryParams.status;
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
