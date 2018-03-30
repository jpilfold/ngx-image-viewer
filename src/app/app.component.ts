import {Component} from '@angular/core';
import {CustomEvent} from './image-viewer/image-viewer-config.model';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  images = [
    '/assets/pexels-photo-352093.jpeg',
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg'
  ];

  handleEvent(event: CustomEvent) {
    if (event.name === 'print') {
      console.log(`Print has been click on img ${event.imageIndex + 1}`);
    }
  }
}
