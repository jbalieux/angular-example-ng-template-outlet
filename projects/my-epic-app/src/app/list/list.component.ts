import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { ListItemModel } from './list-item.model';
import { SiInnerTemplateDirective } from './inner-template.directive';

@Component({
  selector: 'senapi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() items: ListItemModel[];
  @ContentChild(SiInnerTemplateDirective, { read: TemplateRef, static: false }) innerTemplate: TemplateRef<any>;

}

