import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../../actions/tutorial.actions';
import { Tutorial } from '../../model/tutorial.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addTutorial(name: string, url: string) {
    if (!name.startsWith('http')) {
      name = 'https://' + name;
    }
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

}
