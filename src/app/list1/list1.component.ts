import { Component, OnInit } from '@angular/core';
import { Phrase, DataBaseService } from '../data-base.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  public  itemList: Phrase[] = [];
  public selectedPhrase: number = null;

  constructor(
    private dbs: DataBaseService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.itemList = this.dbs.getList();
    this.route.params.subscribe((params: Params) => {
      this.selectedPhrase = +params['id'];
    })
  }
  public selectPhrase(phrase: Phrase) {
    // this.router.navigate(['list1', phrase.id]);
    // this.router.navigate([phrase.id], {relativeTo: this.route});
    this.router.navigate(['detail', phrase.id], {relativeTo: this.route});
  }

}
