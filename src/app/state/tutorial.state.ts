import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from './../model/tutorial.model';
import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';

export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})

export class TutorialState {

  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  @Action(AddTutorial)
  add({getState, patchState}: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial)
  remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
    const state = getState();
    patchState({
      tutorials: state.tutorials.filter(a => {
        console.log('remove', a, payload);
        return a.name !== payload;
      })
    });
  }

  @Action(RemoveTutorial)
  remove2({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.name != payload)
    })
  }
}





