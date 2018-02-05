import { Component, OnInit } from '@angular/core';
import { I18nSelectPipe } from '@angular/common';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lang: String = 'en';
  public translatedCode: any = {
    'en': 'Booking Code',
    'other': 'Booking Code',
  };
  public translatedName: any = {
    'en': 'Family Name',
    'other': 'Family Name',

  };
  public translatedSubmit: any = {
    'en': 'Retrieve booking',
    'other': 'Retrieve booking',

  };
  constructor() {

  }
  ngOnInit() {

  }
}
