import { Component } from '@angular/core';
import { Publicity } from "../../modules/checker/publicity/publicity";
import { Auth } from "../../modules/checker/auth/auth";

@Component({
  selector: 'app-skeleton',
  imports: [Publicity, Auth],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
})
export class Skeleton {

}
