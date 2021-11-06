import logo from './logo.svg';
import './App.css';
import { Row } from 'antd';
import PrivatesRoutes from './config/route/routes/PrivatesRoutes';
import LoginGuard from './config/guards/LoginGuard';

function App() {
  return (
    <div className="App container-fluid">
      <LoginGuard byPassLogin={false}>
        <Row>
          <PrivatesRoutes />
        </Row>
      </LoginGuard>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
