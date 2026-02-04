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
  constructor() {
    this.applyInitialTheme()
  }

  ngAfterViewInit(): void {
    this.applyInitialTheme()
  }

  private applyInitialTheme() {
    const theme = this.themeService.getTheme();
    this.themeService.applyTheme(theme);
  }
}
