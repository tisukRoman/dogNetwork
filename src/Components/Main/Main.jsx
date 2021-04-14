import React from 'react'
import s from './Main.module.css'
import Menu from './Menu/Menu';


const Main = () => {


  return (
    <main className={s.main}>
      <h1 className={s.head}>Have a look at our dogs 		{'\uD83D\uDC15'}<br />
      What you'd like to visit first?</h1>
      <Menu />
    </main>
  );
}



export default Main;