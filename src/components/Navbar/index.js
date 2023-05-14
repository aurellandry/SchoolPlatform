import { useState } from 'react';
import ThreeBars from './ThreeBars';
import './Navbar.css'

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className='navigation'>
            <a href='/' className='brand-name'>
                SchoolPlatform
            </a>
            <button
                className='hamburger'
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <ThreeBars />
            </button>
            <div
                className={isNavExpanded ? 'navigation-menu expanded': 'navigation-menu'}
            >
                <ul>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                    <li>
                        <a href='/register'>Register</a>
                    </li>
                    <li>
                        <a href='mailto:landrykengni@yahoo.com'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
