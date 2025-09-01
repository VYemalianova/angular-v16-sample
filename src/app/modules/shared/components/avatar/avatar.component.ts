import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input({ required: true }) imagePath!: string;
  @Input() backgroundColor = 'linear-gradient(to right, #630cd2, #f95f86)';
}
