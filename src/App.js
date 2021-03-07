import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

// const TopicsList = () => {
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//     </div>
//   );
// }

// const TopicDetail = () => {
//   return (
//     <div>
//       <h1>TOPIC DETAIL</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />        
        {/* <Route exact path='/topics' component={TopicsList} />
        <Route path='/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
