import {Component, OnInit} from '@angular/core';
import {YoutubeDataService} from "../youtube-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  title: string;
  id;
  desc;

  constructor(private youtubeService: YoutubeDataService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(
      (params) => {
        let param = params.get('forUsername');
        console.log(param);
      }
    );



    this.youtubeService.getData().subscribe((response) => {
        console.log(response);
        this.title = response.items[0].snippet.title;
        this.id = response.items[0].id;
        this.desc = response.items[0].snippet.description;
      }
    );
  }

  getProfile(username: HTMLInputElement) {
    this.route.navigate(['/search', {
      queryParams:
        { forUsername: username.value }
    }]);
  }

}

