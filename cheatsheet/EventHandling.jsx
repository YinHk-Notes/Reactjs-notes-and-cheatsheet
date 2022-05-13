// Handling Event

// React Event are in camelCase
<button onClick={handleClick}>
  Action
</button>


// Use preventDefault instead of return false
function handleClick(e) {
  e.preventDefault();
}


// Bind this to use it in the callback
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}


// Passing Arguments to Event Handlers
<button onClick={(e) => this.deleteItem(id, e)}>Delete item</button>
<button onClick={this.deleteItem.bind(this, id)}>Delete item</button>


