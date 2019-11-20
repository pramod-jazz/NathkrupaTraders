import React, { Component } from "react";
import GalleryItem from "./GalleryItem";

import "./Gallery.css";

class Gallery extends Component {


  render() {
    

    let items = this.props.location.state.items.map(itemTitle => {
      let currentItem = this.props.location.state.catalog[itemTitle];
     if( currentItem.isAvailable)
      return (
        <div>
       
          {" "}
          <GalleryItem
            item={currentItem}
            keyName={itemTitle}
            extension={
              currentItem.imageExtension ? currentItem.imageExtension : "jpeg"
            }
          ></GalleryItem>{" "} 
        </div>
      ); else return null;
    });

    return <div className="gallery">{items}</div>;
  }
}

export default Gallery;
