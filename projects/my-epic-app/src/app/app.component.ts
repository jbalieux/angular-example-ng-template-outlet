import { Component } from '@angular/core';
import { ListItemModel } from './list/list-item.model';

@Component({
  selector: 'senapi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-epic-app';
  items: ListItemModel[] = [
    { label: {title: 'WELCOME', text: 'My first try'}, value: '/home' },
    { label: {title: 'ERROR', text: 'My first error bouuuuh'}, value: '/error' },
    { label: {title: 'IT WORKS', text: 'It\'s so nice when everything works' }, value: '/nice' }
  ];
}
