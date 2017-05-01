// app/components/listItem/index.js

import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../actions/';
import { CardSection } from '../common/';
import styles from './styles';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      // Access actions with this.props.actionName()
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  // Key and value variable names are identical so only need one
  return { expanded };
};

// If no need for mapStateToProps() set null but pass in actions to bind them to the component
export default connect(mapStateToProps, actions)(ListItem);
