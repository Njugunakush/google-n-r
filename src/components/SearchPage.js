import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../Response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // live API call
    const { data } = useGoogleSearch(term);

    // MOCK call
    // const data = Response;

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'/>
                </Link>

                <div className='searchPage__headerBody'>
                    <Search hideButtons/>
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>

                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                    <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* render only if a term is provided */}
            {term && (
                <div className='searchPage__results'>
                    <p>
                    <div className='searchPage__resultsCount'>
                        About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} for {term}.
                    </div>
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__resultImage' src={
                                        item.pagemap?.cse_image?.length> 0 &&
                                        item.pagemap?.cse_image[0]?.src
                                    }/>
                                )}
                                    {item.displayLink} 🔽
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
