import { StyleSheet, Dimensions } from 'react-native';

import Colors from './Colors';

export const windowWidth = Dimensions.get('window').width;

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdffff',
        padding: 20,
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        padding: 10,
        backgroundColor: 'white',
        width: windowWidth * 0.9, // 70% of the screen width
      },
    button: {
        backgroundColor: Colors.primary,
        height: 44,
        width: windowWidth * 0.9, // 70% of the screen width
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'mon-bold',
    },
    buttonIcon: {
        position: 'absolute',
        left: 16,
        marginRight: 10,
    },
    footer: {
        position: 'absolute',
        height:100, 
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
    },
});