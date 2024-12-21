import { EventData, Page } from '@nativescript/core';
import { PlayerViewModel } from './view-models/player-view-model';

let viewModel: PlayerViewModel;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  viewModel = new PlayerViewModel();
  page.bindingContext = viewModel;
}

export function onSearch() {
  const username = viewModel.get('username');
  const tag = viewModel.get('tag');
  
  if (username && tag) {
    viewModel.searchPlayer(username, tag);
  }
}