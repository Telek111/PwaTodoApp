import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import List from '../components/List';

class ListContainer extends Component {

  componentWillMount() {
    this.props.fetchToDos();
  }

  render() {
    return (
      <List 
        data={this.props.data}
        addToDo={this.props.addToDo}
      />
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  };
};
  
export default connect(mapStateToProps, actions)(ListContainer);