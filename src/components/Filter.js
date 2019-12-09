import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

class Filter extends React.Component {
    handleChange(item) {
        this.props.filterchange(item, this.props.filterthis)
    }
    render() {
        const what_to_filter = this.props.filterthis
        const cars = this.props.cardata.data
        let car_body_arr = ["Any"]

        this.props.cardata.data.map(function(currItem, index){
            Object.entries(cars[index]).forEach(([key, value]) => {
                   if (key === what_to_filter)
                   {
                    car_body_arr.push(value)
                   }    
            })
            return car_body_arr
        })
        
        const the_filter  = [...new Set(car_body_arr)]
            const the_obj = this;
            return (
                <div>
                    
                    <DropdownButton title={what_to_filter}>
                    
                        {the_filter.map(function(currItem, index){
                            let the_value = the_filter[index]
                            if (index === 0)
                            {
                                the_value = ""
                            }
                        return  <Dropdown.Item eventKey={the_value} value={the_value} key={index} onClick={(event) => the_obj.handleChange(the_value)}>{the_filter[index]} </Dropdown.Item>
                        })}
                        
                    
                    </DropdownButton>
                    <hr />
                </div>
            )
    }
}

export default Filter;