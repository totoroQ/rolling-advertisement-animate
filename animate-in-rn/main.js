'use strict';

import React from 'react';

import Component from './src/Component.js';

class demo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
            return (
                <Component
                    initialRoute={{
                        name: 'page',
                        component:Component
                    }}
                />
            );
        }
}

module.exports = demo;