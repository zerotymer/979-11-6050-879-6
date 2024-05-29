import React from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends React.Component {
    static contextType = ColorContext;

    handlerSetColor = color => {
        this.context.actions.setColor(color);
    };

    handlerSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };



    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                    <div style={{ display: 'flex' }}>
                        { colors.map(color => (
                            <div 
                                key={ color } 
                                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer'}}
                                onClick={() => this.handlerSetColor(color)}
                                onContextMenu={ e => {
                                    e.preventDefault();
                                    this.handlerSetSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;