import React from 'react';
import {Link} from 'react-router-dom';  

import  {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        <Link>{currentUser ? <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>}</Link>
        <Link>{currentUser ? <div className='option'> {currentUser.displayName}</div>  : null }</Link>
        <Link>{currentUser ? <img src={currentUser.photoURL} width='50' height='50' alt=""/>  : null }</Link>

        </div>
    </div>
)
export default Header;