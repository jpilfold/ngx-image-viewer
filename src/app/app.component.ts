import {Component} from '@angular/core';
import {ImageViewerConfig, CustomEvent} from './image-viewer/image-viewer-config.model';

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

  imageIndex = 0;

  config: ImageViewerConfig = {customBtns: [{name: 'print', icon: 'fa fa-print'}, {name: 'link', icon: 'fa fa-link'}]};

  customConfig: {
    imageIndex?: number;
    fromName?: string;
    fromIcon?: string;
    toName?: string;
    toIcon?: string;
  } = {
    imageIndex: 2,
    fromName: 'link',
    toName: 'unlink',
    toIcon: 'fa fa-unlink'
  };

  handleEvent(event: CustomEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
      case 'link':
        console.log('run link logic');
        break;
      case 'unlink':
        console.log('run unlink logic');
        break;
    }
  }

  updateConfig() {
    if (+this.imageIndex === +this.customConfig.imageIndex) {
      const orgBtn = this.config.customBtns.filter(cbtn => cbtn.name === this.customConfig.fromName);

      if (orgBtn[0]) {
        this.customConfig.fromIcon = orgBtn[0].icon;

        this.config.customBtns = this.config.customBtns.filter(cbtn => cbtn.name !== this.customConfig.fromName);

        if (this.customConfig.toName) {
          this.config.customBtns.push({
            name: this.customConfig.toName,
            icon: this.customConfig.toIcon
          });
        }
      }
    } else {
      if (this.customConfig.toName) {
        const found = this.config.customBtns.filter(cbtn => {
          return cbtn.name === this.customConfig.toName && cbtn.icon === this.customConfig.toIcon;
        });

        if (found[0]) {
          this.config.customBtns = this.config.customBtns.filter(cbtn => cbtn.name !== this.customConfig.toName);

          const orgBtn = this.config.customBtns.filter(cbtn => cbtn.name === this.customConfig.fromName);

          if (!orgBtn[0]) {
            this.config.customBtns.push({
              name: this.customConfig.fromName,
              icon: this.customConfig.fromIcon
            });
          }
        }
      }
    }
  }
}
