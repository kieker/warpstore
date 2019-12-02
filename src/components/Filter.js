import React from 'react';


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
    
            return (
                <div>
                    <div className="filter_label">{what_to_filter} </div>
                    <select onChange={(event) => this.handleChange(event.target.value)}>
                    
                        {the_filter.map(function(currItem, index){
                            let the_value = the_filter[index]
                            if (index === 0)
                            {
                                the_value = ""
                            }
                        return  <option className="head" value={the_value} key={index}>{the_filter[index]} </option>
                        })}
                        
                    
                    </select>
                    <hr />
                </div>
            )
    }
}

export default Filter;