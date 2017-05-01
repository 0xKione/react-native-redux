// src/app/components/libraryList/index.js

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../listItem/';

class LibraryList extends Component {
  componentWillMount() {
    // Create a DataSource object for the ListView to use
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // Set the DataSource for the ListView to the state data
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView 
        dataSource={this.dataSource} 
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// Use the connect() function to hook into the Redux state
export default connect(mapStateToProps)(LibraryList);
