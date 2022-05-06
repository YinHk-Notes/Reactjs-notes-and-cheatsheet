import React, {Component} from 'react';

//負責呼叫所有 API 的 HOC (接受三個參數)
const CallApiHOC = (method, url, requestBody) => (WrappedComponent) => {
    return class callApiHOC extends Component {
        sendApiRequest = () => {
            let request = {
                body: JSON.stringify(requestBody),
                method: method,
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(url, request)
                .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出成功的 action
                .catch((error) => {return error});
        };

        render() {
            return <WrappedComponent {...this.state} {...this.props} sendApiRequest={this.sendApiRequest}/>
        }
    }
};
// 使用裝飾好的元件
@CallApiHOC('post', 'https://productURL/Tea01', {product: {example: 'example'}}) // 無法動態的修改參數
class ProductComp extends Component {
    render() {
        const {submitOrder} = this.props;
        return (
            <div>
                <button onClick={submitOrder}>Submit</button>
            </div>
        );
    }
}

export default ProductComp;