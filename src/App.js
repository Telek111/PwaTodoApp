import React, {Component} from 'react';
// import List from './components/List';
import ListContainer from './containers/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <List/> */}
        <ListContainer/>
      </div>
    );
  }
}
export default App;