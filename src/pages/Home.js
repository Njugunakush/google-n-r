import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>Hold up</Link>
                    <Link to='/store'>Wait a minute👉🏾👉🏾👉🏾</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    {/* Avatar */}
                    <Avatar />
                </div>
            </div>

            <div className='home__body'>
                <img
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'/>
                <div className="home__inputContainer">
                    <Search />
                    {/* search  */}
                </div>
            </div>
        </div>
    )
}

export default Home