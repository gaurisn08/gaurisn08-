import Homepage from './Home';
import Navbar from './Navbar';
import Create from './Create';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';
function App() {
  //server responds by sending html page and compiled js bundle then control is towards the react
  // routerand it injects whatever needs to be displayed
  //Routes(switch) makes sure only one route is displayed at one time
  return (
    <Router>
    <div className="App">
    <Navbar/>

    <div className="content">
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/blogs/:id" element={<Blogdetails/>}/>
        <Route path=" " element={<NotFound/>}/>
        </Routes>
    </div>

    </div>
  </Router>
    
  );
}

export default App;
