import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import IconOct from 'react-native-vector-icons/dist/Octicons';
import IconIon from 'react-native-vector-icons/dist/Ionicons';

const MainFragmentSwitch = props => {
    return (
        <View style={ styles.fragmentSwitcherContainer }>
            <TouchableHighlight
                underlayColor={'rgba(255, 255, 255, .2)'}
                style={[ styles.fragmentSwitcherButton, props.state === 'schedule' && { backgroundColor: '#444' } ]}
                onPress={ () => props.setter('schedule') }>
                <IconOct name={'calendar'} size={28} color={'white'} />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={'rgba(255, 255, 255, .2)'}
                style={[ styles.fragmentSwitcherButton, props.state === 'finance' && { backgroundColor: '#444' } ]}
                onPress={() => props.setter('finance')}>
                <IconIon name={'receipt'} size={28} color={'white'} />
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    fragmentSwitcherContainer: {
        flexDirection: 'row',
        backgroundColor: '#333',
    },
    fragmentSwitcherButton: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
});

export default MainFragmentSwitch;
