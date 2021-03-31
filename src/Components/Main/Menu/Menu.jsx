import React from 'react'
import s from './Menu.module.css'
import MenuOption from './MenuOption/MenuOption'
import { NavLink } from 'react-router-dom'


const Menu = () => {


  return (
    <div className={s.menu}>
        <NavLink className={s.menu_links} to='/photos'><MenuOption url={'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp'} text={'IMAGES'} /></NavLink>
        <NavLink className={s.menu_links} to='/disliked'><MenuOption url={'https://pbs.twimg.com/profile_images/1351720980972933122/I3MnYUdm_400x400.jpg'} text={'DISLIKED'} /></NavLink>
        <NavLink className={s.menu_links} to='/breeds'><MenuOption url={'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5'} text={'OTHERS'} /></NavLink>
        <NavLink className={s.menu_links} to='/liked'><MenuOption url={'https://www.dogstrust.org.uk/help-advice/_images/164742v800_puppy-1.jpg'} text={'LIKED'} /></NavLink>



    </div>
  );
}

export default Menu;