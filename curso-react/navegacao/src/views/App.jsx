
import Content from '../components/layouts/Content';
import Menu from '../components/layouts/Menu';
import { BrowserRouter } from 'react-router-dom' // essa importação mudou
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>


    </div>
  );
}

export default App;
