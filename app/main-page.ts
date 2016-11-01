import { EventData } from 'data/observable';

import { Page } from 'ui/page';
 
import { mainViewModel } from './models/main-view-model';
import { mainList } from './config';


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  page.bindingContext = new mainViewModel(page);
  page.bindingContext = new mainList(page);
     
}