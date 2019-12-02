import React from 'react';
import formatPrice from '../helpers';
class Car extends React.Component {

    handleCart = (event) => {
        event.preventDefault()
        const car = this.props.cardetails.model +' '+ this.props.cardetails.manufacturer
        this.props.addCar(car)
    }
    
    render() {
        return (
            <div className="car-element">
                <div className="img_container"><img alt="" src={"http://recruitment.warpdevelopment.co.za/vehicles/" + this.props.cardetails.img} /></div>
                <div className="details_container"> <h3>{this.props.cardetails.manufacturer} {this.props.cardetails.model}</h3>
                <p>Price:  {formatPrice(this.props.cardetails.price)}</p>
                <p>Make:  {this.props.cardetails.manufacturer}</p>
                <p>Model:  {this.props.cardetails.model}</p>
                <p>Body:  {this.props.cardetails.body}</p>
            <button onClick={this.handleCart}>Add to Cart</button>
            </div>
            </div>
        )
    }
}

export default Car;