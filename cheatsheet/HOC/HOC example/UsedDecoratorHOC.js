import React, {Component} from 'react';

// 可傳入性別參數的 HOC
const UserGenderHOC = (gender) => (WrappedComponent) => {
    return class userGenderHOC extends Component {
        render() {
            return (
                <WrappedComponent gender={gender} {...this.props} />
            );
        }
    }
};
// 計數 HOC
const CountHOC = (WrappedComponent) => {
    return class countHOC extends Component {
        constructor() {
            super();
            this.state = {count: 0};
        }

        incrementCount = () => {
            this.setState({count: this.state.count + 1});
        };

        render() {
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
};
// 改用 Decorator 方式
@UserGenderHOC('Male')
@CountHOC
class UserComp extends Component {
    render() {
        const {gender, count, incrementCount} = this.props;
        return (
            <div>
                <div>Gender: {gender}</div>
                <div>Number: {count}</div>
                <button onClick={incrementCount}>Add Number</button>
            </div>
        );
    }
}

export default UserComp;