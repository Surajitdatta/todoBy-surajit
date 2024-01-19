import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import { appStore } from './components/appStore';
import Todoform from "./components/Todoform"
function App() {
  return (
   <Provider store={appStore}>
      <div className="App">
        <Todoform/>
      
      </div>

   </Provider>
    
  );
}

export default App;
