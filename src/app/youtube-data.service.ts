import {Injectable} from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {Http} from "@angular/http";

@Injectable()
export class YoutubeDataService extends DataServiceService {

  constructor(http: Http) {
    super(
      'https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=vishacademy+&key=AIzaSyAe_y1loSSZ8qF6uvrLo1cwlMLHh2djbVs',
      http);
  }
}
