import './App.css';
import Nav from './Components/Nav'
import Homepage from './Components/Homepage';
import Mac from './Components/Mac';
import Macprolearn from './Components/Macprolearn';
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

function App() {
  // const [page, setPage] = useState("/")

  return (
    <div className="App">
      <Nav />
      {/* onChangePage={setPage} */}
      {/* <Homepage /> */}

      <Switch>
          <Route path="/Mac">
            <Mac />
          </Route>

          <Route path="/Macprolearn">
            <Macprolearn />
          </Route>

          {/* <Route exact path="/iphone">
            <Iphone />
          </Route> */}

          {/* <Route exact path="/ipad">
            <Ipad />
          </Route> */}

          {/* <Route exact path="/airpods">
            <Airpod />
          </Route> */}

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path= "*"> 
            <h1> 404 Not Found</h1>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
