import { Component, OnInit } from '@angular/core';
import { Globalobject } from "../globalObject";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(public globalObject: Globalobject) { }

  ngOnInit(): void {
  }

}
