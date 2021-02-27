import * as React from 'react';
import styles from './StaffPortal.module.scss';
import { IStaffPortalProps } from './IStaffPortalProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {HashRouter, Route, Switch} from 'react-router-dom';
import * as jQuery from 'jquery';
import Login from "./Login";
import Dashboard from './pages/Dashboard';

export default class StaffPortal extends React.Component<IStaffPortalProps, {}> {
  public render(): React.ReactElement<IStaffPortalProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); 
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
<>
        <HashRouter>
          <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />

          </Switch>
         
          
          
        </HashRouter>
    </>
    );
  }
}
