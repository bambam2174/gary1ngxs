import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from './../../model/tutorial.model';
import { TutorialState } from './../../state/tutorial.state'; // We will use this shortly
import { RemoveTutorial } from './../../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
    console.log(this.tutorials$);
   }

  ngOnInit() {
  }

  delTutorial(name: string) {
    console.log(name);
    this.store.dispatch(new RemoveTutorial(name));
  }
}
