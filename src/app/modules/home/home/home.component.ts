import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('aboutUsSection', { static: false }) set content(content: ElementRef<HTMLDivElement> | null) {
    const scrollTo = history.state.scrollTo;

    if (content && scrollTo === 'about-us') {
      content.nativeElement.scrollIntoView({ behavior: 'smooth' });
      history.replaceState({}, '');
    }
  }
}
