import { Component, effect, HostBinding} from '@angular/core';
import { Publicity } from "../../modules/checker/publicity/publicity";
import { Auth } from "../../modules/checker/auth/auth";
import { ThemeService } from '../../core/services/theme.service';
import { ThemeDecorations } from '../../core/constants/theme-decoration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton',
  imports: [
    CommonModule,
    Publicity, Auth],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
})
export class Skeleton {

  @HostBinding('attr.data-theme') dataTheme = 'default';
  decorationLeft = '';
  decorationRight = '';
  decorationCenter:string|undefined = '';

  constructor(private themeService: ThemeService) {
    effect(() => {
      const theme = this.themeService.getTheme();
      const decorations = ThemeDecorations[theme] ?? ThemeDecorations['default'];
      console.log(theme);
      
      this.decorationLeft = decorations.left;
      this.decorationRight = decorations.right;
      this.decorationCenter = decorations.center
      this.dataTheme = theme;
    });
  }


}
