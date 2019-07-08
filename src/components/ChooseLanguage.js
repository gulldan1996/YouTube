import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import YouTubeHandler from './YouTubeHandler';


export default function ChooseLanguage(props) {
  return (
    <React.Fragment>
    <div className="app">
        <div>
          <Link to="/langs" onClick={props.deselect}>Choose Language</Link>
        </div>
    </div>
    <Switch>
      <Route exact path="/langs" render={() => <div><br/>
          <Link to="/" onClick={props.chooseEn}>English</Link><br/><br/>
          <Link to="/ru" onClick={props.chooseRu}>Russian</Link>
          </div>}
        />
        <Route path="/" component={YouTubeHandler} />
        <Route path="/ru" component={YouTubeHandler} />
      </Switch>
    </React.Fragment>
  )
}
