**Functional Components vs Class-based Components** \
**https://cythilya.github.io/2018/04/09/react-functional-components-vs-class-based-components/#functional-components**

React 的元件可用以下方式分類



*   Functional Components vs Class-based Components 或
*   Stateless Components vs Stateful Components


## **Functional Components**

Functional Components 的撰寫方式是從父層傳遞的 props 得到資料，然後將結果 JSX 輸出至 DOM。


### **特點**



*   簡單好學，輕量，效能較佳。
*   由於可當成 Pure Function / Pure Components，只要給予相同的輸入 props，就會得到相同的輸出結果（即 JSX），因此易於測試。 其中 props 是 Immutable 且 Top-down。
*   沒有內部狀態（State），因此也是 Stateless Components。
*   沒有 Lifecycle Hooks 和 refs。
*   常用於 Presentational Components。


### **範例**

這個元件 VideoListItem 從父層得到 video，接著輸出一段 HTML，內含剛剛從 video 內得到的標題和圖檔位置。

const VideoListItem = ({ video }) => {

  return (

    &lt;li>

      &lt;h3>{video.title}&lt;/h3>

      &lt;img src={video.imageUrl} />

    &lt;/li>

  );

};


## **Class-based Components**


### **特點**



*   有內部狀態，因此是 Stateful Components。State 是 JavaScript 物件，用來保存元件內的資料。
*   有 Life Cycle Methods 和 refs。
*   只要 props 和 state 是 Immutable，Class-based Components 也可以是一個 Stateless Components / Pure Components。


### **範例**

這個元件 SearchBar 是用來輸入欲搜尋的字串，未來會將這個字串丟到伺服器端以得到搜尋結果。



*   (1) 這裡先定義一個 Class「SearchBar」，然後繼承 React.Component 所擁有的功能。Class-based Components 必須要有 render method 和 super，不然會報錯。
*   (2) super 表示繼承父類別的功能，讓子類別可以使用父類別的屬性和方法。
*   (3) 只有在設定 state 的初始值才會使用這樣 this.state = XXX 直接賦值的方式，其他地方若要更新 state 會用 setState。
*   (4) ES6 React.Component 並不會將 method 自動綁定到自身之下，要手動綁定 this。因此，一定要在下面設定 this.onInputChange = this.onInputChange.bind(this)，不然 this 會是 undefined！Ref: [React: “this” is undefined inside a component function](https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function)
*   (5) 這是 JSX 的 Syntax Sugar，等於 React.createElement。
*   (6) 有設定 value 才會更新元件，也就是 &lt;input> 的 value，否則只是觸發事件而已；而由於觸發事件導致更新 state，所以 value 才會被更新。
*   (7) 只要更新 state，就會導致元件觸發 render method 而自動更新元件。

class SearchBar extends Component {

  // ----- (1)

  constructor(props) {

    super(props); // ----- (2)

    this.state = { term: '' }; // ----- (3)

    this.onInputChange = this.onInputChange.bind(this); // ----- (4)

  }

  render() {

    return (

      // ----- (5)

      &lt;div>

        &lt;input

          value={this.state.term} // ----- (6)

          onChange={this.onInputChange}

        />

      &lt;/div>

    );

  }

  onInputChange(event) {

    this.setState({ term: event.target.value }); // ----- (7)

  }

}


## **Pure Components**

只要可以保證相同的輸入會得到相同的輸出，那麼就可以稱這個元件是 Pure Components。因此，Functional Components 是 Pure Components；而只要 props 和 state 是 Immutable，Class-based Components 也可以是 Pure Components。

React.PureComponent 的 ShouldComponentUpdate() 和 React.Component 的 ShouldComponentUpdate() 不同之處在於，React.PureComponent 的 ShouldComponentUpdate() 只做[淺比較（Shallow Compare）](https://stackoverflow.com/questions/36084515/how-does-shallow-compare-work-in-react)，也就是只比較位置而不比較內容值，因此一但儲存的位置相同但內容不同，就無法正常運作。淺比較的運作基礎是假設資料是 Immutable，也就是說，只要資料更新就存到另一個記憶體位置，因此只要比對記憶體位置就等於比較值是否相等。

