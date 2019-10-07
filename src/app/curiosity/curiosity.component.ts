import { Component, OnInit } from '@angular/core';
import { CuriosityService } from './curiosity.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.css']
})
export class CuriosityComponent implements OnInit {
  images:any= [];
  constructor(private curiosityService: CuriosityService) { }

  ngOnInit() {
    this.curiosityService.getImages().subscribe(
      (res:any) => {
        console.log(res.photos);
        this.images = res.photos;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    )
  }

}
