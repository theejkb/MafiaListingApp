import { Component, OnInit } from '@angular/core';
import {MOBSTERS} from "../mock-mobster-list";
import {Mobster} from "../mobster";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mobster-card',
  templateUrl: 'list-mobtser.component.html',
  styles: []
})
export class ListMobsterComponent implements OnInit {
  mobstersList = MOBSTERS;
  mobsterSelected: Mobster|undefined;

  constructor(private route: Router, private router: Router) { }

  ngOnInit() {
  }

  selectMobster(mobster: Mobster) {
    console.log('selected: ' + mobster.name);
    this.router.navigateByUrl(`/mobster/${mobster.nonce}`);
  }

  findMobster(mobsterId: string){
    const mobster: Mobster|undefined = this.mobstersList.find(el => el.nonce.toString() === mobsterId);
    this.mobsterSelected = mobster;

    if (this.mobsterSelected){
      this.selectMobster(this.mobsterSelected);
    }

    return this.mobsterSelected
  }

}
