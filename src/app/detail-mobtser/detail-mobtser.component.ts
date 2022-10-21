import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MOBSTERS} from "../mock-mobster-list";
import {Mobster} from "../mobster";

@Component({
  selector: 'app-detail-mobtser',
  templateUrl: './detail-mobtser.component.html',
  styles: [
  ]
})
export class DetailMobtserComponent implements OnInit {

  mobsterList: Mobster[];
  currentMob: Mobster|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.mobsterList = MOBSTERS;
    const mobId: string|null = this.route.snapshot.paramMap.get('id');
    this.currentMob = this.mobsterList?.find(e => mobId == e.nonce.toString());
  }

  goToMobsterList(){
    this.router.navigateByUrl('/mobsters');
  }

}
