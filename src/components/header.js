import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

class Header extends React.Component {
    state = {
      showCart : false
    }
    handleClick = (event) => {
      const showCart = !(this.state.showCart)
      this.setState({showCart})
    }
    render() {
        return (
          <header className="head">
            <div className="cart-button"><button onClick={this.handleClick}><img alt="" src="cart-icon.png"/> </button></div>
          { this.state.showCart ? <ShoppingCart  cars_in_cart={this.props.cars_in_cart} removeCar={this.props.removeCar}></ShoppingCart> : null}</header>
        )
    }
}

export default Header;