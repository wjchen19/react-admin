import React from 'react';
// HashRouter,  , BrowserRouter 
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Login from './views/login'
// import './App.scss';
// 使用es6的继承属性 来写一个组件 
class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  //switch  模糊匹配显示第一个匹配到的   exact  精准匹配关键字  
  render() {
    return (
      <div >
        <HashRouter>
          <Switch>
            <Route component={Login} path='/login'></Route>
            <Route component={About} path='/about'></Route>
            <Route component={Home} exact path='/'></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

/* // <BrowserRouter>
     //   <Switch>
       //     <Route component={About} path='/about'></Route>
 //     <Route component={Home} exact path='/'></Route>
 //   </Switch>
 // </BrowserRouter> */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
