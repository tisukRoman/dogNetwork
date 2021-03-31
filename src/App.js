import React from 'react';
import { Switch, Route } from 'react-router';
import s from './App.module.css';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main/Main';
import PreloaderCSS from './Assets/prelouder';
const Photos = React.lazy( () => import('./Components/Photos/Photos'));
const Disliked  = React.lazy( () => import('./Components/Disliked/Disliked'));
const Breeds  = React.lazy( () => import('./Components/Breeds/Breeds'));
const Liked  = React.lazy( () => import('./Components/Liked/Liked'));


function App() {
  return (<div className={s.App}>
    <Aside />

    <div className={s.main_screen}>
      <Switch>

        <React.Suspense fallback={<PreloaderCSS />}>

          <Route exact path="/photos" component={Photos}/>
          <Route exact path="/disliked" component={Disliked}/>
          <Route exact path="/breeds" component={Breeds}/>
          <Route exact path="/liked" component={Liked}/>
          <Route exact path='/' component={Main}/>

        </React.Suspense>

      </Switch>
    </div>
  </div>);
}

export default App;
