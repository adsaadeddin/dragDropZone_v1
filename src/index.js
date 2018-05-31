import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropzoneComponent from 'react-dropzone-component';
import registerServiceWorker from './registerServiceWorker';




var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <div className= "drop"><DropzoneComponent config={componentConfig}
                     eventHandlers={eventHandlers}
                     djsConfig={djsConfig}/></div>,
    document.getElementById('content')
);
registerServiceWorker();
