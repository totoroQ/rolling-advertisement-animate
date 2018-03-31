import * as React from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

class Item extends React.Component {
    render() {
        return (
            <View style={styles.contentView}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentView: {
        width: 350,
        height: 110,
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 10,
        overflow: 'hidden',
        backgroundColor: 'pink',
    }
});

export { Item };
