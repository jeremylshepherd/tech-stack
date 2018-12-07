//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import LibraryItem from './LibraryItem';

// create a component
class LibraryList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                keyExtractor={(item) => `id${item.id}` }
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        <LibraryItem {...item} />
                    );
                }}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
});

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

//make this component available to the app
export default connect(mapStateToProps)(LibraryList);
