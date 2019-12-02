import React from 'react';

import './App.css';
import Header from './components/header';
import Sidebar from './components/Sidebar';

import CarList from './components/CarList';
/*import {createStore} from 'redux';*/

class App extends React.Component {
  state = { "data" : [
    {
        "manufacturer": "Porsche",
        "model": "911",
        "price": 1550000,
        "body":"Coupé",
        "wiki": "http://en.wikipedia.org/wiki/Porsche_997",
        "img": "/images/Porsche_997.jpg"
    },
    {
        "manufacturer": "Nissan",
        "model": "GT-R",
        "price": 850000,
        "body":"Coupé",
        "wiki":"http://en.wikipedia.org/wiki/Nissan_Gt-r",
        "img": "/images/Nissan_GT-R.jpg"
    },
    {
        "manufacturer": "BMW",
        "model": "M3",
        "price": 705000,
        "body":"Sedan",
        "wiki":"http://en.wikipedia.org/wiki/Bmw_m3",
        "img": "/images/BMW_M3.jpg"
    },
    {
        "manufacturer": "Audi",
        "model": "S5",
        "price": 630000,
        "body":"Sedan",
        "wiki":"http://en.wikipedia.org/wiki/Audi_S5#Audi_S5",
        "img": "/images/Audi_S5.jpg"
    },
    {
        "manufacturer": "Audi",
        "model": "TT",
        "price": 550000,
        "body":"Coupé",
        "wiki":"http://en.wikipedia.org/wiki/Audi_TT",
        "img": "/images/Audi_TT.jpg"
    },
    {
        "manufacturer": "Mercedes-Benz",
        "model": "M-Class",
        "price": 950000,
        "body":"SUV",
        "wiki":"https://en.wikipedia.org/wiki/Mercedes-Benz_M-Class",
        "img": "/images/Mercedes-Benz_GLE.jpg"
    },
    {
        "manufacturer": "Ford",
        "model": "Mustang",
        "price": 720000,
        "body":"Coupé",
        "wiki":"https://en.wikipedia.org/wiki/Ford_Mustang",
        "img": "/images/Ford_Mustang_GT.jpg"
    }
] ,'filter': {
      "body": '',
       "manufacturer": ''}}

  addCar = car => {
    const cars = {...this.state.cars};
      /*const key = cars[car]*/
        cars[car] = cars[car] +1 || 1;
        if (cars[car] >1){
          cars[car] = 1
          alert(car+ " is already in the cart")
        }
        this.setState({cars});
  }
  removeCar = car => {
    const cars = {...this.state.cars}
     cars[car] =null
    this.setState({cars});
  }
  changeFilter = (filter_item, type) => {
    const filter = this.state.filter
    filter[type] = filter_item
    this.setState({filter});
  }
  render() {

 
  return (
    <div className="App">
      
      <Header  cars_in_cart={this.state.cars} removeCar={this.removeCar}></Header>
      <div className="headline"> <h1>Browse Vehicles</h1></div>
      <Sidebar cars={this.state} filterchange={this.changeFilter}></Sidebar>
      <CarList addCar={this.addCar} filter={this.state.filter} ></CarList>
      
    </div>
  ) }
}

export default App;
