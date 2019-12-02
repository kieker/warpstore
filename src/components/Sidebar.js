import React from 'react';
import Filter from '../components/Filter';
import RangeFilter from '../components/rangeFilter';
class Sidebar extends React.Component {
    state = {}
    render() {
      
        return (
            
          <div className="side"> <Filter cardata={this.props.cars} filterthis="body" filterchange={this.props.filterchange}/>
          <Filter cardata={this.props.cars} filterthis="manufacturer" filterchange={this.props.filterchange} />
          <RangeFilter ></RangeFilter>
           </div>
        )
    }
}

export default Sidebar;