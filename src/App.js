import React, { Component } from 'react';
import logo from './nathkrupa.jpeg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import { Dropdown , Button} from 'react-bootstrap';

import { List, arrayMove } from 'react-movable';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const UnitsEnum = Object.freeze({ "Kg": "Kg", "L": "Litre", "grams": "Grams", "ML": "ML", "Piece": "Piece", "Dozen": "Dozen" })

class App extends Component {
  onDragEnd = result => {

  }

  handleChange = event => {
    console.log("Changed got called 2");

    let existingCatalog = {...this.state.catalog};
    let changedCatalog = existingCatalog[event.target.id];
    changedCatalog.price = event.target.value ;
    existingCatalog[event.target.id] = changedCatalog;
    this.setState({
      catalog : existingCatalog
    });
     


   
  }

  handleSpecialDiscount = event => {
    console.log("Changed got called  target value " + event.target.checked);

    let existingCatalog = {...this.state.catalog};
    let changedCatalog = existingCatalog[event.target.id];

    changedCatalog.hasDiscount = event.target.checked; 
    existingCatalog[event.target.id] = changedCatalog;
    this.setState({
      catalog : existingCatalog
    });
     


   
  }

  handleAvailability = event => {
    console.log("Changed got called  target value " + event.target.checked);

    let existingCatalog = {...this.state.catalog};
    let changedCatalog = existingCatalog[event.target.id];

    changedCatalog.isAvailable = event.target.checked; 
    existingCatalog[event.target.id] = changedCatalog;
    this.setState({
      catalog : existingCatalog
    });
     


   
  }

  state = {
    catalog: {
      Kobi: { name: "Cabbage", marathiTitle : "कोबी", price: 10, highlighted: false, isAvailable : false, hasDiscount : true ,
       unit: UnitsEnum["Piece"] },
      Egg: { name: "Egg",marathiTitle : "अंडे", price: 10, isAvailable : false, hasDiscount : false , highlighted: false ,unit: UnitsEnum["Dozen"]},
      Dudh: { name: "Milk", marathiTitle : "दूध", price: 10, isAvailable : true, hasDiscount : true ,highlighted: false },
      Methi: { name: "Fenugreek",marathiTitle : "मेथी", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Padval: { name: "Pointed Gourd", marathiTitle : "पडवळ",price: 10,  isAvailable : true, hasDiscount : true ,highlighted: false },
      Flower: { name: "Cauli Flower", marathiTitle : "फ्लॉवर",price: 10, isAvailable : true, hasDiscount : true ,highlighted: false },
      Bhendi: { name: "Lady Finger", marathiTitle : "भेंडी",price: 10,isAvailable : true, hasDiscount : false , highlighted: false },
      Batata: { name: "Potato",marathiTitle : "बटाटा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Bhopala: { name: "Bottle Gourd",marathiTitle : "भोपळा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Ambadi : { name: "Roselle",marathiTitle : "अम्बाड़ी", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Beet : { name: "Beet Root",marathiTitle : "बीट", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Chinch : { name: "Tamarind",marathiTitle : "चिंच", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Cucumber : { name: "Cucumber",marathiTitle : "काकडी", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Dill : { name: "Dill",marathiTitle : "शापू", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Dodaka : { name: "Ridge Gourd",marathiTitle : "दोडका", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Drumsticks : { name: "Drumsticks",marathiTitle : "शेवगा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Dudhi : { name: "Bottle Gourd",marathiTitle : "दूधी भोपळा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      HirviMirchi : { name: "Chilly",marathiTitle : "हिरवी मिरची", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      LalMirchi : { name: "Red Chilly",marathiTitle : "लाल मिरची", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Mula : { name: "Raddish",marathiTitle : "मुळा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Karale : { name: "Bitter Gourd",marathiTitle : "कारले", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Onion : { name: "Onion",marathiTitle : "कांदा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Palak : { name: "Spinach",marathiTitle : "पालक", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "png" },
      ShimalaMirch : { name: "Bell Pepper",marathiTitle : "शिमला मिरची", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Tomato : { name: "Tomato",marathiTitle : "टोमॅटो", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Tondali : { name: "Ivy Gourd",marathiTitle : "तोन्डली", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false ,
      imageExtension : "jpg" },
      Vangi : { name: "Brinjol",marathiTitle : "वांगी", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Vatana : { name: "Green Peas",marathiTitle : "वटाणा", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
      Kothimbir : { name: "Coriander",marathiTitle : "कोथिम्बीर", price: 10, isAvailable : true, hasDiscount : false ,highlighted: false },
    },
    items: [
      "Kobi","Egg","Dudh","Methi","Padval","Flower","Bhendi","Batata","Bhopala","Ambadi","Beet","Chinch","Cucumber","Dill","Dodaka","Drumsticks","Dudhi"
      ,"HirviMirchi","Karale","Kothimbir","LalMirchi","Mula","Onion","Palak","ShimalaMirch","Tomato","Tondali","Vatana","Vangi"
    ]
  }

  render() {



    let names = [];
    let imageStore = {};
    const textBoxSize = {
    width:"100px"
    }

    Object.entries(this.state.catalog).map(([key, value]) => {
      names.push(value);
      imageStore[value.name] = require("./images/" + key+ "." + (value.imageExtension ? value.imageExtension : "jpeg"));
    });


    //console.log(names);
    console.log(imageStore);
    return (


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Nathkrupa Daily Fresh
        </h1>
          <p>
            Select Products From Below Gallery and Drag it by Rank!!
        </p>
        <Link   to={{ pathname: '/preview', state: this.state }} >Print</Link>
        <br/>
        </header>
        <main className="App-body">

       

          <List className="Drag-Drop-Area"
            values={this.state.items}
            onChange={({ oldIndex, newIndex }) =>
              this.setState(prevState => ({
                items: arrayMove(prevState.items, oldIndex, newIndex)
              }))
            }
            renderList={({ children, props }) => <ul className="UL-Box" {...props}>{children}</ul>}
            renderItem={({ value, props }) => <li className="LI-Box" {...props}>
              <img className="standard-frame" src={imageStore[this.state.catalog[value].name]} alt={this.state.catalog[value].name} />

               
            
    <br/> <div className="Oneline-Box"> <b> {this.state.catalog[value].name} ( अंडी  ) </b> &nbsp; &#x20B9; <form> <input onChange={this.handleChange} type="number" 
id={this.state.catalog[value].name} style={textBoxSize} defaultValue={this.state.catalog[value].price}></input> Per 
       

            <Dropdown drop="up">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Kg
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Kg</Dropdown.Item>
    <Dropdown.Item href="#/action-2">ML</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Mg</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br/> 
       Is Available
       {this.state.catalog[value].isAvailable ? <input checked type="checkbox" onChange={this.handleAvailability} id={this.state.catalog[value].name} />: 
       <input type="checkbox" onChange={this.handleAvailability}   id={this.state.catalog[value].name}/> } 
         &nbsp; Special Discount {this.state.catalog[value].hasDiscount ? <input checked onChange={this.handleSpecialDiscount} id={this.state.catalog[value].name} type="checkbox" />
         : <input type="checkbox" id={this.state.catalog[value].name} onChange={this.handleSpecialDiscount}/> } 
        </form> 
</div>





            </li>}
          />
        </main>
        <footer >
          <p>Created By </p> : https://techprehension.com : +919762124376
      </footer>
      </div>
    );
  }

}



export default App;
