import React from "react";
import VideoDetail from "./VideoDetail";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

export default function YouTube(props) {
  let item = props.lang;
  return (
    <div>
      <SearchBar
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        term={item.placeholderSearch}

      />
      <div>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={props.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              handleVideoSelect={props.handleVideoSelect}
              videos={props.videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
