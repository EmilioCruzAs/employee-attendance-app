import { Component, DOCUMENT, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('checker-front');
  private readonly doc = inject(DOCUMENT)
  
  ngOnInit(): void {
    this.changeTheme()
  }

  changeTheme(){
    this.doc.documentElement.setAttribute("data-theme","default");
  }
}
