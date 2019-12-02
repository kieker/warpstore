import React from 'react';

class ShoppingCart extends React.Component {
    handleRemove(item){
       this.props.removeCar(item)
    }
    render() {
        let outp = []

        let outputEmpty = false
        if (!this.props.cars_in_cart) {
             outp.push(<div key="0">There is nothing in the cart</div>)
       }
       else {
        Object.entries(this.props.cars_in_cart).forEach(([key, value]) => {
            if (value > 0)
            {
                outputEmpty = false
                outp.push( <li /*key={index}*/> {key} <span className="removeItem" onClick={() => this.handleRemove(key)}> X</span></li>)
            }
            else {
                value =0
                key=0
                outputEmpty = true
            
         }
        })
            
       }
        return (
            <div className="cart">
                <ul>                    
                { outputEmpty ? <div key="0">There is nothing in the cart</div> : outp }
                </ul>
                </div>       
        )
    }
}
export default ShoppingCart;