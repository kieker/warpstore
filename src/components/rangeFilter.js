import React from 'react';


class RangeFilter extends React.Component {
    render() {
        return (
            <div className="range_field">
                <div className="from_field">
                    <label htmlFor="from" >From:</label>
                    <input type="text" name="from"/>
                </div>
                <div className="to_field">
                    <label htmlFor="to" >To:</label>
                    <input type="text" name="to"/>
                </div>
            </div>
           
        )
    }
}
export default RangeFilter;