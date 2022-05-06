import React, {Component} from 'react';

// 登入畫面
class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

// 以水果類當例子
class FruitsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {userToken: '', authPass: true, count: 1};
    }
    // 驗證身分
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.setState({authPass: true, userToken: token});
        } else {
            this.setState({authPass: false});
        }
    }
    // 數量控制
    addProduct = () => {
        this.setState({count: this.state.count + 1});
    };
    lessProduct = () => {
        if (this.state.count === 1) {return;} // 最小商品數為1
        this.setState({count: this.state.count - 1});
    };
    // 送出訂單
    submitOrder = () => {
        let request = {
            body: JSON.stringify({token: this.state.userToken, product: {number: this.state.count}}),
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://productURL/Fruits01', request)
            .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
            .catch((error) => {return error});
    };

    render() {
        const {name} = this.props;
        if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
        return (
            <div>
                <div>Name: {name}</div>
                <div>Number: {this.state.count}
                    <button onClick={this.addProduct}>+</button>
                    <button onClick={this.lessProduct}>-</button>
                </div>
                <button onClick={this.submitOrder}>Submit</button>
            </div>
        );
    }
}
// 多出一段單純元件的部分
class PureFruitsProduct extends Component {
    render() {
        const {name} = this.props;
        if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
        return (
            <div>
                <div>Name: {name}</div>
                <div>Number: {this.state.count}
                    <button onClick={this.addProduct}>+</button>
                    <button onClick={this.lessProduct}>-</button>
                </div>
                <button onClick={this.submitOrder}>Submit</button>
            </div>
        );
    }
}


export {
    FruitsProduct,
    PureFruitsProduct
}
