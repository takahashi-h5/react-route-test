// add start
import { Link } from "react-router-dom";
// add end
import './App.css';

function App() {
  const title: string = "ルーティング";
  return (
    <div className="App">
      <h1>{title}</h1>
      <Link to='/about'>
        ボタン
      </Link>
    </div>
  );
}

export default App;
