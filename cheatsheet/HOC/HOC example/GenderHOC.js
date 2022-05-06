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

// // 要傳入的元件
class BaseComp extends Component {
    render() {
        const {gender} = this.props;
        return (<div>Gender: {gender}</div>); // Gender: Male
    }
}

// 傳入參數並使用元件
const Male = UserGenderHOC('Male')(BaseComp);

export default Male;
