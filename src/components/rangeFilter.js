import React from 'react';


class RangeFilter extends React.Component {
    handleFloorChange = (the_value) => {
        
        this.props.filterchange(the_value, 'from_price')

    } 
    handleCeilingChange = (the_value) => {
        this.props.filterchange(the_value, 'to_price');
    }
    render() {
        return (
            <div className="range_field">
                <div className="from_field">
                    <label htmlFor="from" >From:</label>
                    <input type="text" name="from" onChange={(event) => this.handleFloorChange(event.target.value)}/>
                </div>
                <div className="to_field">
                    <label htmlFor="to" >To:</label>
                    <input type="text" name="to"  onChange={(event) => this.handleCeilingChange(event.target.value)}/>
                </div>
            </div>
           
        )
    }
}
export default RangeFilter;