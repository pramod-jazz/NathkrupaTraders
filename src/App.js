import React, { Component } from "react";
import store from "store";


import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import logo from "./nathkrupa.jpeg";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";



import { List, arrayMove } from "react-movable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const UnitsEnum = Object.freeze({
  Kg: "Kg",
  L: "Litre",
  grams: "Grams",
  ML: "ML",
  Piece: "Piece",
  Dozen: "Dozen"
});

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
//    store.set("my-name","Pramod");
  //  let prevCatalog =  JSON.parse(store.get("Catalog-State"));
  // console.log(prevCatalog) ;


 
    const { cookies } = props;
    this.state =  {
      catalog:  {
        Kobi:  cookies.get('Kobi-Data') ?cookies.get('Kobi-Data'): {
          name: "Cabbage",
          marathiTitle: "कोबी",
          price: 10,
          highlighted: false,
          isAvailable: false,
          hasDiscount: true,
          unit: UnitsEnum["Piece"]
        },
        Egg:  cookies.get('Egg-Data') ?cookies.get('Egg-Data') :{
          name: "Egg",
          marathiTitle: "अंडे",
          price: 10,
          isAvailable: false,
          hasDiscount: false,
          highlighted: false,
          unit: UnitsEnum["Dozen"]
        },
        Dudh: cookies.get('Dudh-Data') ?cookies.get('Dudh-Data') :{
          name: "Milk",
          marathiTitle: "दूध",
          price: 10,
          isAvailable: true,
          hasDiscount: true,
          highlighted: false
        },
        Methi: cookies.get('Methi-Data') ?cookies.get('Methi-Data') :{
          name: "Fenugreek",
          marathiTitle: "मेथी",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Padval: cookies.get('Padval-Data') ?cookies.get('Padval-Data') :{
          name: "Pointed Gourd",
          marathiTitle: "पडवळ",
          price: 10,
          isAvailable: true,
          hasDiscount: true,
          highlighted: false
        },
        Flower: cookies.get('Flower-Data') ?cookies.get('Flower-Data') :{
          name: "Cauli Flower",
          marathiTitle: "फ्लॉवर",
          price: 10,
          isAvailable: true,
          hasDiscount: true,
          highlighted: false
        },
        Bhendi: cookies.get('Bhendi-Data') ?cookies.get('Bhendi-Data') :{
          name: "Lady Finger",
          marathiTitle: "भेंडी",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Batata: cookies.get('Batata-Data') ?cookies.get('Batata-Data') : {
          name: "Potato",
          marathiTitle: "बटाटा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Bhopala: cookies.get('Bhopala-Data') ?cookies.get('Bhopala-Data') :{
          name: "Gourd",
          marathiTitle: "भोपळा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Ambadi: cookies.get('Ambadi-Data') ?cookies.get('Ambadi-Data') :{
          name: "Roselle",
          marathiTitle: "अम्बाड़ी",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Beet: cookies.get('Beet-Data') ?cookies.get('Beet-Data') :{
          name: "Beet Root",
          marathiTitle: "बीट",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Chinch: cookies.get('Chinch-Data') ?cookies.get('Chinch-Data') :{
          name: "Tamarind",
          marathiTitle: "चिंच",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Cucumber: cookies.get('Cucumber-Data') ?cookies.get('Cucumber-Data') :{
          name: "Cucumber",
          marathiTitle: "काकडी",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Dill: cookies.get('Dill-Data') ?cookies.get('Dill-Data') :{
          name: "Dill",
          marathiTitle: "शापू",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Dodaka: cookies.get('Dodaka-Data') ?cookies.get('Dodaka-Data') :{
          name: "Ridge Gourd",
          marathiTitle: "दोडका",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Drumsticks: cookies.get('Drumsticks-Data') ?cookies.get('Drumstics-Data') :{
          name: "Drumsticks",
          marathiTitle: "शेवगा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Dudhi: cookies.get('Dudhi-Data') ?cookies.get('Dudhi-Data') :{
          name: "Bottle Gourd",
          marathiTitle: "दूधी भोपळा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        HirviMirchi: cookies.get('HirviMirchi-Data') ?cookies.get('HirviMirchi-Data') :{
          name: "Chilly",
          marathiTitle: "हिरवी मिरची",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        LalMirchi: cookies.get('RedMirchi-Data') ?cookies.get('RedMirchi-Data') : {
          name: "Red Chilly",
          marathiTitle: "लाल मिरची",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Mula: cookies.get('Mula-Data') ?cookies.get('Mula-Data') :{
          name: "Raddish",
          marathiTitle: "मुळा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Karale: cookies.get('Karale-Data') ?cookies.get('Karale-Data') :{
          name: "Bitter Gourd",
          marathiTitle: "कारले",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Onion: cookies.get('Onion-Data') ?cookies.get('Onion-Data') : {
          name: "Onion",
          marathiTitle: "कांदा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Palak: cookies.get('Palak-Data') ?cookies.get('Palak-Data') :{
          name: "Spinach",
          marathiTitle: "पालक",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "png"
        },
        ShimalaMirch: cookies.get('ShimalaMirch-Data') ?cookies.get('ShimalaMirch-Data') :{
          name: "Bell Pepper",
          marathiTitle: "शिमला मिरची",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Tomato: cookies.get('Tomato-Data') ?cookies.get('Tomato-Data') :{
          name: "Tomato",
          marathiTitle: "टोमॅटो",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Tondali: cookies.get('Tondali-Data') ?cookies.get('Tondali-Data') :{
          name: "Ivy Gourd",
          marathiTitle: "तोन्डली",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false,
          imageExtension: "jpg"
        },
        Vangi: cookies.get('Vangi-Data') ?cookies.get('Vangi-Data') :{
          name: "Brinjol",
          marathiTitle: "वांगी",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Vatana: cookies.get('Vatana-Data') ?cookies.get('Vatana-Data') :{
          name: "Green Peas",
          marathiTitle: "वटाणा",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        },
        Kothimbir: cookies.get('Kothimbir-Data') ?cookies.get('Kothimbir-Data') :{
          name: "Coriander",
          marathiTitle: "कोथिम्बीर",
          price: 10,
          isAvailable: true,
          hasDiscount: false,
          highlighted: false
        }
      },
      items: [
        "Kobi",
        "Egg",
        "Dudh",
        "Methi",
        "Padval",
        "Flower",
        "Bhendi",
        "Batata",
        "Bhopala",
        "Ambadi",
        "Beet",
        "Chinch",
        "Cucumber",
        "Dill",
        "Dodaka",
        "Drumsticks",
        "Dudhi",
        "HirviMirchi",
        "Karale",
        "Kothimbir",
        "LalMirchi",
        "Mula",
        "Onion",
        "Palak",
        "ShimalaMirch",
        "Tomato",
        "Tondali",
        "Vatana",
        "Vangi"
      ]
    }
  }

  handleSelect = (id, event) => {
    const { cookies } = this.props;
    let existingCatalog = { ...this.state.catalog };
    let changedCatalog = existingCatalog[id];

    changedCatalog.unit = event;
    existingCatalog[id] = changedCatalog;
    store.set("Catalog-State",existingCatalog);
    cookies.set( id + '-Data', existingCatalog[id]);

    this.setState({
      catalog: existingCatalog
    });
  };

  handleChange = event => {
    const { cookies } = this.props;
    let existingCatalog = { ...this.state.catalog };
    let changedCatalog = existingCatalog[event.target.id];

    changedCatalog.price = event.target.value;
    existingCatalog[event.target.id] = changedCatalog;
    cookies.set( event.target.id + '-Data', existingCatalog[event.target.id]);
    store.set("Catalog-State",existingCatalog);

    this.setState({
      catalog: existingCatalog
    });
  };

  handleSpecialDiscount = event => {
    const { cookies } = this.props;
    let existingCatalog = { ...this.state.catalog };
    let changedCatalog = existingCatalog[event.target.id];

    changedCatalog.hasDiscount = event.target.checked;
    existingCatalog[event.target.id] = changedCatalog;
    cookies.set( event.target.id + '-Data', existingCatalog[event.target.id]);
    console.log(existingCatalog);
    store.set("Catalog-State",existingCatalog);

    this.setState({
      catalog: existingCatalog
    });
  };



  handleAvailability = event => {
    const { cookies } = this.props;
    let existingCatalog = { ...this.state.catalog };
    let changedCatalog = existingCatalog[event.target.id];

    changedCatalog.isAvailable = event.target.checked;
    existingCatalog[event.target.id] = changedCatalog;
    cookies.set( event.target.id + '-Data', existingCatalog[event.target.id]);
    store.set("Catalog-State",existingCatalog);

    this.setState({
      catalog: existingCatalog
    });
  };

  
  



  render() {
    let names = [];
    let imageStore = {};
    const textBoxSize = {
      width: "100px"
    };

    Object.entries(this.state.catalog).map(([key, value]) => {
      names.push(value);
      imageStore[value.name] = require("./images/" +
        key +
        "." +
        (value.imageExtension ? value.imageExtension : "jpeg"));
      return true;
    });

    const units = Object.entries(UnitsEnum).map(([key, item]) => {
      return <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Nathkrupa Daily Fresh</h1>
          <p>Select Products From Below Gallery and Drag it by Rank!!</p>
          <Link to={{ pathname: "/preview", state: this.state }}>Print</Link>
          <br />
        </header>
        <main className="App-body">
          <List 
            className="Drag-Drop-Area"
            values={this.state.items}
            onChange={({ oldIndex, newIndex }) => {
              console.log(">> old Index", oldIndex);
              console.log(">> new Index", newIndex);

              this.setState(prevState => ({
                items: arrayMove(prevState.items, oldIndex, newIndex)
              }));
            }}
            renderList={({ children, props }) => (
              <ul  className="UL-Box" {...props}>
                {children}
              </ul>
            )}
            renderItem={({ value, props }) => (
              
              <li className="LI-Box" key={value} {...props}>
                <img
                  className="standard-frame"
                  src={imageStore[this.state.catalog[value].name]}
                  alt={this.state.catalog[value].name}
                />

                <div className="Oneline-Box">

                  <b>
                    {this.state.catalog[value].name} ({" "}
                    {this.state.catalog[value].marathiTitle} ){" "}
                  </b>{" "}
                </div>{" "}
                <div className="All-catlog-details">
                  &nbsp; &#x20B9;
                  <form>
                    <b />{" "}
                    <input
                      onChange={this.handleChange}
                      type="number"
                      id={value}
                      style={textBoxSize}
                      value={this.state.catalog[value].price}
                    ></input>
                    Per
                    <DropdownButton drop="up"
                      id={value}
                      onSelect={this.handleSelect.bind(this, value)}
                      title={this.state.catalog[value].unit ? this.state.catalog[value].unit : "Kg"}
                    >
                      {units}
                    </DropdownButton>
                    Available &nbsp;
                    {this.state.catalog[value].isAvailable ? (
                      <input
                        checked
                        type="checkbox"
                        onChange={this.handleAvailability}
                        id={value}
                      />
                    ) : (
                        <input
                          type="checkbox"
                          onChange={this.handleAvailability}
                          id={value}
                        />
                      )}
                    &nbsp; Special Discount{" "}
                    {this.state.catalog[value].hasDiscount ? (
                      <input
                        checked
                        onChange={this.handleSpecialDiscount}
                        id={value}
                        type="checkbox"
                      />
                    ) : (
                        <input
                          type="checkbox"
                          id={value}
                          onChange={this.handleSpecialDiscount}
                        />
                      )}

                  </form>

                </div>
              </li>
            )}
          />
        </main>
        <footer>
          <p>Created By </p> : https://techprehension.com : +919762124376
        </footer>
      </div>
    );
  }
}

export default withCookies(App);
