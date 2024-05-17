import React, { Component } from 'react';

class ScrollBox extends Component {

    render() {

        const style = {
            position: 'relative',
            height: '300px',
            width: '300px',

            overflow: 'auto',
            border: '1px solid black'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        };

        return (
            <div
                style={ style }
                ref={ (ref) => { this.box = ref } }
            >
                <div style={ innerStyle } />
            </div>
        );
    }
}

export default ScrollBox;