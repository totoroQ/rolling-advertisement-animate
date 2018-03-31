'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	Animated,
	Dimensions
} from 'react-native';

import { Item } from './Item';
import { Ad } from './Ad';

const imageVisibleHeight=120;
const imageHeight=350;
const windowHeight = Dimensions.get('window').height;

export default class Page extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            transValue:new Animated.Value(0),
        };
	}
	
	render() {
		return (	
			<View style={styles.container}>
				<ScrollView
				horizontal={false}
				bounces={true}
				scrollEventThrottle={20}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					alignItems: 'center'
				}}
				onLayout={this.getHeight.bind(this)}
				onScroll={this.scrollFunc.bind(this)} 
				>
					<Item/>
					<Item/>
					<Item/>
					<Item/>
					<Item/>
					<Ad
						imageSource={require('./cat.jpeg')}
						transValue={this.state.transValue}
						imageHeight={imageHeight}
						imageVisibleHeight={imageVisibleHeight}  
						ref = {ad => this.ad = ad}
					/>
					<Item/>
					<Item/>
					<Item/>
					<Item/>
					<Item/>
				</ScrollView>         
			</View>	
		);
	}

	scrollFunc(){	
		this.ad.image.measure((x,y,w,h,dx,dy)=>{
            let componentHeight=this.componentHeight;
            let topPosition=windowHeight-componentHeight;
            let bottomPosition=windowHeight-imageVisibleHeight;
            let isInScreen = dy>topPosition&&dy<bottomPosition;
            let isVisibleInBottom = dy>bottomPosition&&dy<windowHeight;
            let isVisibleInTop = dy>(topPosition-imageHeight)&&dy<topPosition;
			if(isInScreen){
				this.state.transValue.setValue((imageVisibleHeight-imageHeight)/(imageVisibleHeight-componentHeight)*dy+(imageVisibleHeight-imageHeight)/(imageVisibleHeight-componentHeight)*(imageVisibleHeight-windowHeight));		
            }
            else if(isVisibleInBottom){
                this.state.transValue.setValue(0);
            }
            else if(isVisibleInTop){
                this.state.transValue.setValue(imageVisibleHeight-imageHeight);
            }
		})
    }

    getHeight(event){
        this.componentHeight=event.nativeEvent.layout.height;
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});