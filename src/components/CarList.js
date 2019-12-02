import React from 'react';
import Car from '../components/Car';
import lodash from 'lodash'
class CarList extends React.Component {
    state = {"data":[
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
    ]}


    getData = () => {
        fetch('http://kiekerweb.co.za/vehicles.json')
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData)
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
      }
    componentDidMount() {
        this.getData()
    }
    filter_cars(the_filter, type) {
        
         const results = lodash.pick(this.state.data,the_filter);
        console.log(results)
        return results 
    }
    render() {
        let display

        Object.entries(this.props.filter).forEach(([key, value]) => { 
        if (value !== '') {
             display = this.state.data.filter(o => o.body === value )  
                  
        }
        else  display = this.state.data
        console.log(display)  //filter doesn't work correctly. but here you can see the output in the console of what it would have filtered.
    })
    
        return (
            <div className="carlist-element">
                
                { Object.keys(display).map(key => <Car 
                key={key} 
                cardetails={this.state.data[key]} 
                addCar={this.props.addCar} 
                removeCar={this.props.removeCar}/>)}
            </div>
        )
    }
}
export default CarList