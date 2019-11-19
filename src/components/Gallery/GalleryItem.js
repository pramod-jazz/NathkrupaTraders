
import React, { Component } from 'react';
import { Badge,Dropdown , Button,Container,Row,Col,Image} from 'react-bootstrap';
import './GalleryItem.css';





class GalleryItem extends Component {



    render() {
        let img = require("../../images/" + this.props.keyName + "." + this.props.extension)
        return (
           
                            <div className="gallery-item"  >
                                       <Container>
  <Row>
 
    <Col xs={6} md={4}>
      <Image src={img} className="standard-frame" rounded/>
    </Col>
  
  </Row>
</Container>

<Badge pill variant="success">
   { this.props.item.hasDiscount ? "Special Discount!!": ""} 
  </Badge>
<br/>
{this.props.item.name} - ( {this.props.item.marathiTitle} ) <br/>

&#x20B9; <span className="Price-holder"> <b>{this.props.item.price}</b>  </span> Per {this.props.item.unit ? this.props.item.unit : "Kg" }
                               
                            </div>
           
        )
    }

}

export default GalleryItem;