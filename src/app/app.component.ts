import { Component, ViewChild } from '@angular/core';
import {AngularEmbedVideoService} from "angular-embed-video";
import {NgImageSliderComponent} from "ng-image-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modul_152_Video';

  youtubeUrl = 'https://youtu.be/QYILrIzMEu0';

  youtubeId = 'QYILrIzMEu0';

  constructor(private embedService: AngularEmbedVideoService) {
    console.log(this.embedService.embed(this.youtubeUrl));

    console.log(this.embedService.embed_youtube(this.youtubeId));
  }

  @ViewChild('nav') slider!: NgImageSliderComponent;
  imageObject = [
    {
      image: 'assets/images/c_intelligent.JPG',
      thumbImage: 'assets/images/c_intelligent.JPG',
      alt: 'romeo_looking_through Microscope',
      order: 7
    },
    {
      image: 'assets/images/c_flexing.JPG',
      thumbImage: 'assets/images/c_flexing.JPG',
      alt: 'romeo_flexing',
      order: 4
    },
    {
      image: 'assets/images/c_rauchen_lehrlingstag.JPG',
      thumbImage: 'assets/images/c_rauchen_lehrlingstag.JPG',
      alt: 'romeo_smoking_apprantice_day',
      order: 5
    },
    {
      image: 'assets/images/f_m_escape_room.JPG',
      thumbImage: 'assets/images/f_m_escape_room.JPG',
      alt: 'mark_filippo_escape_room',
      order: 16
    },
    {
      image: 'assets/images/java_nashorn.JPG',
      thumbImage: 'assets/images/java_nashorn.JPG',
      alt: 'java_rino_dead',
      order: 12
    },
    {
      image: 'assets/images/jugo_titanik.JPG',
      thumbImage: 'assets/images/jugo_titanik.JPG',
      alt: 'mark_romeo_polybahn',
      order: 13
    },
    {
      image: 'assets/images/m_c_a_capybara.JPG',
      thumbImage: 'assets/images/m_c_a_capybara.JPG',
      alt: 'the boys infront of capybara',
      order: 11
    },
    {
      image: 'assets/images/m_c_a_dino_sammlung.JPG',
      thumbImage: 'assets/images/m_c_a_dino_sammlung.JPG',
      alt: 'the boys in dino room',
      order: 10
    },
    {
      image: 'assets/images/m_c_a_fisch.JPG',
      thumbImage: 'assets/images/m_c_a_fisch.JPG',
      alt: 'the boys infront of fish',
      order: 8
    },
    {
      image: 'assets/images/m_c_a_fisch2.JPG',
      thumbImage: 'assets/images/m_c_a_fisch2.JPG',
      alt: 'the boys next to the fish',
      order: 9
    },
    {
      image: 'assets/images/m_c_a_vorne.JPG',
      thumbImage: 'assets/images/m_c_a_vorne.JPG',
      alt: 'the boys waiting for the train',
      order: 6
    },
    {
      image: 'assets/images/m_c_clap.JPG',
      thumbImage: 'assets/images/m_c_clap.JPG',
      alt: 'rome_mark_shaking_hands',
      order: 1
    },
    {
      image: 'assets/images/m_c_hinten.JPG',
      thumbImage: 'assets/images/m_c_hinten.JPG',
      alt: 'mark_rome_from_behind',
      order: 3
    },
    {
      image: 'assets/images/m_c_mittelfinger.JPG',
      thumbImage: 'assets/images/m_c_mittelfinger.JPG',
      alt: 'romeo_did_not_like_the_foto!',
      order: 2
    },
    {
      image: 'assets/images/m_vor_c.JPG',
      thumbImage: 'assets/images/m_vor_c.JPG',
      alt: 'mark_standing_infront_romeo',
      order: 15
    },
    {
      image: 'assets/images/n_essen.JPG',
      thumbImage: 'assets/images/n_essen.JPG',
      alt: 'nils eating',
      order: 14
    }]

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
