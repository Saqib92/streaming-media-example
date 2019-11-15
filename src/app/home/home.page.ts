import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) {}

// We Need this.streamingMedia.clsoeVideo(); // this functionality to close player programatically. Please help 

  playStreaming(url){
  	let options: StreamingVideoOptions = {
	  successCallback: () => { console.log('Video played') },
	  errorCallback: (e) => { console.log(e, 'Error streaming') },
	  orientation: 'landscape',
	  shouldAutoClose: true,
	  controls: true
	};

	this.streamingMedia.playVideo(url, options);
  }

}
