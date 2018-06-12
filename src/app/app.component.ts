import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public frameSrc: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(location.hash.slice(1));
  }
}
