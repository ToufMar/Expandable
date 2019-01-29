import React, { Component } from 'react';
import './compnent.css';


class ExpandableComponent extends Component {

    state = {
        height: '33%',
        width: '33%',
        dragging: false,
        transition: null,
    }

    dragging = (e) => {
        if (this.state.dragging) {
            console.log(e.bubbles)
            this.setState({
                width: e.targetTouches[0].pageX + 100 + 'px',
                height: e.targetTouches[0].pageY + 100 + 'px'
            })
        }
    }

    pointerOut = (e) => {
        this.setState({
            dragging: false,
            width: '30%',
            height: '30%',
            transition: true
        })
    }

    stopExpand = (e) => {
        console.log('remove')
        this.setState({
            dragging: false,
            width: '30%',
            height: '30%',
            transition: true
        })
    }

    startExpand = (e) => {
        console.log('ca tourne')
        
        this.setState({
            dragging: true,
            transition: false
        })
    }

    render() {
        return (
            <div style={{ height: this.state.height, width: this.state.width, transition: (this.state.transition) ? '0.3s ease-in-out' : null }}
                // onPointerDown={this.startExpand}
                // onPointerUp={this.stopExpand}
                // onPointerMove={this.dragging}
                // onPointerOut={this.pointerOut}
                onTouchStart={this.startExpand}
                onTouchEnd={this.stopExpand}
                onTouchMove={this.dragging}
                onTouchCancel={this.pointerOut}
                id='container'>
            </div>)
    }

}

export default ExpandableComponent;