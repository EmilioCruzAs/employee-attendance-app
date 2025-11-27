import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicity',
  imports: [CommonModule],
  templateUrl: './publicity.html',
  styleUrl: './publicity.css',
})
export class Publicity implements OnInit {
  public currentIndex: number = 0
  private index = 0;
  images = [
    // "https://images.wallpapersden.com/image/download/china-river-bridge_Zm1mbWmUmZqaraWkpJRoa2VlrWdpZWU.jpg",
    // "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297236.jpg?semt=ais_hybrid&w=740&q=80",
    // "https://applescoop.org/image/wallpapers/mac/4k-old-chinese-town-14-10-2024-1728961377-hd-wallpaper.jpg",
    // "https://images6.alphacoders.com/560/560908.jpg",
  ]


  ngOnInit(): void {
    if (this.images.length > 1) {
      this.changeCurrent();
    }
  }

  private changeCurrent() {
    setInterval(() => {
      this.currentIndex = this.index
      this.index++;
      (this.index == this.images.length ? this.index = 0 : null);
    }, 3000);
  }

  public changeIndex(i: number) {
    this.currentIndex = i;
    this.index = i;
  }






}
