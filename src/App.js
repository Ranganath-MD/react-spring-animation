import React from 'react';
import { BrowserRouter, Link, Route, Switch} from "react-router-dom"
import SpringComponent from "./components/spring"
import TrailsComponent from "./components/Trails"
import TransitionComponent from "./components/Transition"
import KeyFrames from "./components/KeyFrames"
import Hooks from "./components/Hooks"
import MouseParallax from "./components/MouseParallax"
import ParallaxComponent from "./components/Parallax"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" >Spring</Link>
        <Link to="/transition" >Transition</Link>
        <Link to="/trails" >Trails</Link>
        <Link to="/keyframes" >Key Frames</Link>
        <Link to="/hooks" >Spring Hooks</Link>
        <Link to="/mouse-parallax" >Mouse Parallax</Link>
        <Link to="/parallax" >Parallax</Link>

        <Switch>
          <Route path="/" component={SpringComponent} exact />
          <Route path="/transition" component={TransitionComponent} exact />
          <Route path="/trails" component={TrailsComponent} exact />
          <Route path="/keyframes" component={KeyFrames} exact />
          <Route path="/hooks" component={Hooks} exact />
          <Route path="/mouse-parallax" component={MouseParallax} exact />
          <Route path="/parallax" component={ParallaxComponent} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
