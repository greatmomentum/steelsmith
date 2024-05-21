// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

// Define the App component
function App() {
  return (
    <Router>
      <div>
        {/* Your navigation bar or menu can go here */}
        <Switch>
          {/* Define routes using Route component */}
          {/* Each Route should have a path and corresponding component */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> 
        
          {/* This route will catch any other routes not defined above */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

// Export the App component
export default App;
