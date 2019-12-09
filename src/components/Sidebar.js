import React from 'react';
import Filter from '../components/Filter';
import RangeFilter from '../components/rangeFilter';
import Jumbotron from 'react-bootstrap/Jumbotron';
class Sidebar extends React.Component {
    state = {}
    render() {
      
        return (
            
          <Jumbotron className="side"> 
            <Filter cardata={this.props.cars} filterthis="body" filterchange={this.props.filterchange} />
            <Filter cardata={this.props.cars} filterthis="manufacturer" filterchange={this.props.filterchange} />
          <RangeFilter filterchange={this.props.filterchange}></RangeFilter>
           </Jumbotron>
        )
    }
}

export default Sidebar;