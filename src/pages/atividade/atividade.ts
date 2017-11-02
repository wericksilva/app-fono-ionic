import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AudioProvider } from 'ionic-audio';

/**
 * Generated class for the AtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atividade',
  templateUrl: 'atividade.html',
})
export class AtividadePage {
  selectedTrack: any;

  myTracks: any[];
  allTracks: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
   // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
   this.myTracks = [{
    src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
    artist: 'John Mayer',
    title: 'Why Georgia',
    art: 'img/johnmayer.jpg',
    preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
  }];
  /*,
  {
    src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
    artist: 'John Mayer',
    title: 'Who Says',
    art: 'img/johnmayer.jpg',
    preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
  }];**/

}

ngAfterContentInit() {     
  // get all tracks managed by AudioProvider so we can control playback via the API
  this.allTracks = this._audioProvider.tracks; 
}

playSelectedTrack() {
  // use AudioProvider to control selected track 
  this._audioProvider.play(this.selectedTrack);
}

pauseSelectedTrack() {
   // use AudioProvider to control selected track 
   this._audioProvider.pause(this.selectedTrack);
}
       
onTrackFinished(track: any) {
  console.log('Track finished', track)
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadePage');
  }

}
