import { Component, Input } from '@angular/core';
import { IOption } from '../../../../../modules/shared/models/option.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input({ required: true }) item!: IOption;
  @Input({ required: true }) navigateTo!: string;
}
