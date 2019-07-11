import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import YouTubeHandler from './YouTubeHandler';

export default class ChooseLanguage extends Component {
  componentDidMount() {
    if (this.props.lang === undefined || this.props.lang === null) {
      this.props.searchStorage();
    } else {
      return null
    }
  }
  render() {
    const accessEnStr = this.props.lang === 'en';
    const accessEnObj = this.props.en;
    const accessRuObj = this.props.ru;
    return (
      this.props.lang === undefined ? <button onClick={this.props.changedLangState}>Choose language</button> :
      <React.Fragment>
        <Link to="/langs">{accessEnStr ? accessEnObj.chooseLang : accessRuObj.chooseLang}</Link>
      <Switch>
        <Route path="/langs" render={() => <div><br/>
            <Link to="/" onClick={() => this.props.langChanged('en')}>
              {accessEnStr ? accessEnObj.button.en : accessRuObj.button.en}
              </Link><br/><br/>
            <Link to="/ru" onClick={() => this.props.langChanged('ru')}>
              {accessEnStr ? accessEnObj.button.ru : accessRuObj.button.ru}
            </Link>
            </div>}
          />
          <Route path="/" component={YouTubeHandler} />
          <Route path="/ru" component={YouTubeHandler} />
        </Switch>
      </React.Fragment>
    )
  }
}
