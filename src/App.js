import logo from './logo.svg';
import './App.css';
import WebApp from "@twa-dev/sdk";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  // https://github.com/twa-dev/SDK/blob/45b54230902e36f4deeaaeeb140559008e82d0f4/src/telegram-web-apps.js#L1574
  return (
      <>
          <div className="card">
              <button onClick={() => WebApp.expand()}>
                  expand
              </button>
              <button onClick={() => WebApp.close()}>
                  close
              </button>
          </div>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
          </div>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
          </div>
          {/* Here we add our button with alert callback */
          }
          <div className="card">
              <button onClick={() => WebApp.showAlert(`Current count is ${count}`)}>
                  ShowAlert
              </button>
              <button onClick={() => WebApp.showPopup({'title': 'test_title', 'message': 'this is a message'})}>
                  ShowPopup
              </button>
              <button onClick={() => WebApp.showConfirm(`Current count is ${count}`)}>
                  ShowConfirm
              </button>
              <button onClick={() => WebApp.showScanQrPopup({'text': 'test_title'})}>
                  showScanQrPopup
              </button>
          </div>
          <div className="card">
              <button onClick={() => WebApp.openLink('https://www.myailey.com')}>
                  openLink
              </button>
          </div>
          <div className="card">
              <button onClick={() => WebApp.requestWriteAccess()}>
                  requestWriteAccess
              </button>
              <button onClick={() => WebApp.requestContact()}>
                  requestContact
              </button>
          </div>
      </>);
}

export default App;
