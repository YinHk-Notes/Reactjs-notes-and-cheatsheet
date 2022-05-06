import React, {Component} from 'react';

// 簡易的 HOC
const HOC = (WrappedComponent) => {
    return class simpleHOC extends Component {
        constructor() {
            super();
            this.state = {say: 'good morning'}
        }

        render() {
            return <WrappedComponent {...this.props} say={this.state.say}/>
        }
    }
};
// 要傳入的元件
class SimpleComp extends Component {
    render() {
        const {say} = this.props;
        return (<div>Johnny {say}</div>); // Johnny good morning
    }
}
// 使用掛入完的元件
const Simple =  HOC(SimpleComp);

export default Simple;