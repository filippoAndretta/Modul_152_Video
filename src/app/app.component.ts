import { Component } from '@angular/core';
import {AngularEmbedVideoService} from "angular-embed-video";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modul_152_Video';

  youtubeUrl = 'https://www.youtube.com/watch?v=BM1J_cktJAw';

  youtubeId = 'BM1J_cktJAw';

  constructor(private embedService: AngularEmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrl));

    console.log(this.embedService.embed_youtube(this.youtubeId));
  }
}
