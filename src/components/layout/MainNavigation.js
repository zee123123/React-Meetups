import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>All Meetups</Link>
                </li>
                <li>
                    <Link to = '/new-meetup'>Make new Meetups</Link>
                </li>
                <li>
                    <Link to = '/favorites'>Your Favorite Meetups</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default MainNavigation;