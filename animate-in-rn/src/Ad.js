import * as React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
	Animated
} from 'react-native';

class Ad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <View 
                style={[ { height:this.props.imageVisibleHeight }, styles.imagePiece ]} 
                ref = {image => this.image = image}
            >
                <Animated.Image 	 
                    source={this.props.imageSource}  
                    style={[{
                        height:this.props.imageHeight, 
                        resizeMode:'contain',                   
                        transform:[
                            {translateY: this.props.transValue},
                        ]
                    }, styles.images]}
                /> 		
            </View>	               
        );    
    }
}

const styles = StyleSheet.create({
    imagePiece:{
        alignItems:'flex-start',
        width:350,
        marginTop:10,
        overflow:'hidden',
        backgroundColor: 'white'
    },
    images:{
        width:350
    }
});

export { Ad };