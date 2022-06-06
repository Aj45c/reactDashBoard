import logo from './logo.svg';
import './App.css';
import Average from './components/Average';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Sidebar from './components/Sidebar';
import Visitors from './components/Visitors';
import './styles.css';

function App() {
  return (
    <div id = "theApp">
      <Average/>
      <Reviews/>
      <Sentiment/>
      <Sidebar/>
      <Visitors/>
    </div>
  );
}

export default App;
