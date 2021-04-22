import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from 'react-bootstrap-buttons';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log('You clicked on this >>> ', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        //  do something with input...push to another page
        history.push('/search');
    };

    return (
        <form className="search">
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div >

            {!hideButtons ? (
                <div>
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucky</Button>
                </div >
                <div className='search__buttonSwa'>
                    Google offered in: <Link> Kiswahili</Link>
                </div>
                </div>
                ) : (
                    <div className='search__buttons'>
                        <Button className='search__buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
                    </div >)
            }
        </form >
    )
}


export default Search;