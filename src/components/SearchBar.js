import React, { Component }from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
  componentDidMount() {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4',
        q: 'Hello',
        type: 'video'
      }
    }).then(res => console.log(res.data.items))
  }


  render() {
    return (
      <div className="search-bar ui segment">
        {/* <form className="ui form"> */}
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              onChange={(event) => this.props.handleChange(event.target.value)}
              name="video-search"
              type="text"
              placeholder={this.props.term}
            />
            <button onClick={this.props.handleSubmit}></button>
          </div>
        {/* </form> */}
      </div>
    );
  }
}
