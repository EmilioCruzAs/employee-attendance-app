import { AfterViewInit, Component, inject } from '@angular/core';
import { Publicity } from "../../modules/checker/publicity/publicity";
import { Auth } from "../../modules/checker/auth/auth";
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-skeleton',
  imports: [Publicity, Auth],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
})
export class Skeleton implements AfterViewInit {
  private themeService = inject(ThemeService);
  private theme = this.themeService.getTheme()

  constructor() {
    this.setTheme()
  }

  ngAfterViewInit(): void {
    this.setTheme()
  }

  setTheme() {
    //const container = document.documentElement
    const container = document.getElementById('main-container')
    container?.setAttribute("data-theme", this.theme)
  }
}
