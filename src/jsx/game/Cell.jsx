import React from 'react';
import {Motion, spring} from 'react-motion';

const getCellStyle = (animation, val, isReversed) => {
    let {pop, flip, highlight} = animation;

    var style = {
        width: '5vh',
        height: '5vh',
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 6px, rgba(0, 0, 0, 0.14902) 0px 3px 6px',
        borderRadius: '100%',
        transform: `rotateZ(45deg) scale(${pop}) rotateX(${isReversed? flip: 0}deg)`
    };

    switch(val) {
        case 1:
            style.backgroundColor = 'white';
            style.border = `3px solid rgba(255, 50, 50, ${highlight})`;
            break;
        case 2:
            style.backgroundColor = 'black';
            style.border = `3px solid rgba(255, 50, 50, ${highlight})`;
            break;
        default:
            style.backgroundColor = '#eee';
            style.border = `3px solid white`;
            break;
    }
    return style;
};

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ prevVal: this.props.val });
    }

    render() {
        let prev = this.state.prevVal, curr = this.props.val;
        let isReversed = (prev == 1 && curr == 2) || (prev == 2 && curr == 1);

        let animation = {
            pop: spring(this.props.val === 0? 0.1: 0.9, {stiffness: 100, damping: 8}),
            flip: spring(this.props.val === 1? 360: 0, {stiffness: 200, damping: 30}),
            highlight: spring(this.props.highlight? 1: 0)
        };

        return (
            <Motion
                defaultStyle={{pop: 0.1, flip: 0, highlight: 0}}
                style={animation}>
                {(animation) => <div style={getCellStyle(animation, this.props.val, isReversed)}/>}
            </Motion>
        );
    }
}
