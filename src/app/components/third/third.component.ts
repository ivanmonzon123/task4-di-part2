import {Component, Host, OnInit} from '@angular/core';
import {FirstService} from '../../service/first/first.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  // constructor(@Host() private _firstService: FirstService) { }

  ngOnInit(): void {
    // this._firstService.greeting();
  }

}
