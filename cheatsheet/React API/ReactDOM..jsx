// The react-dom package also provides modules specific to client and server apps
import * as ReactDOM from 'react-dom';


const root = createRoot(container);
root.render(element);

//eg:
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello, world</h1>;

root.render(element);

