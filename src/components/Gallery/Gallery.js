import React, {Component} from 'react';
import GalleryItem from './GalleryItem';


import  './Gallery.css';

class Gallery extends Component {

 state  = {
     catalogItems : [{name : "Kobi" , price : 10 , highlighted : false },
     {name : "Egg" , price : 10 , highlighted : false },
     {name : "Dudh" , price : 10 , highlighted : false },
     {name : "Methi" , price : 10 , highlighted : false },
     {name : "Padval" , price : 10 , highlighted : false },
     {name : "Flower" , price : 10 , highlighted : false },
     {name : "Bhendi" , price : 10 , highlighted : false },
     {name : "Batata" , price : 10 , highlighted : false },]
 }   




render(){
    console.log(this.props.location.state.catalog);

    let items =  Object.entries(this.props.location.state.catalog).map(([key, item]) => {
        return ( <div> <GalleryItem  item={item} keyName={key} extension={item.imageExtension ? 
            item.imageExtension : "jpeg" }></GalleryItem>  </div>);
      });
   


  
  return (
  
     <div className="gallery">
    
 
         {items}

        
       
     </div>
   
         
  )
}

}

export default Gallery;