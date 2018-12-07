//import liraries
import React, { Component } from 'react';
import { 
    LayoutAnimation,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { Card, CardSection } from './Elements';
import { connect } from 'react-redux';
import * as actions from '../actions';


// create a component
class LibraryItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        const { title, description, id, expanded } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <Card>
                        <CardSection style={{ justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '800' }}>{title}</Text>
                        </CardSection>
                        {expanded
                        ? <CardSection>
                            <Text>{description}</Text>
                        </CardSection>
                        : null
                        }
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.id;
    return { expanded };
};

//make this component available to the app
export default connect(mapStateToProps, actions)(LibraryItem);
