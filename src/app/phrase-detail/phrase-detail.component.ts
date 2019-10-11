import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataBaseService, Phrase } from '../data-base.service';

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.css']
})
export class PhraseDetailComponent implements OnInit {
  public item: Phrase = null;

  constructor(
   private router: Router,
   private route: ActivatedRoute,
   private dbs: DataBaseService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.item = this.dbs.getById(id);
    });
  }
  public goToList(): void {
    this.router.navigate(['list1', {id: this.item.id}]);
  }

}
