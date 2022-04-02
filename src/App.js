import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Home/>
      </div>
    </Provider>
  );
}

export default App;
