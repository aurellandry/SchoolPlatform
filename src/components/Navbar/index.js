import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/reducers/authSlice';
import ThreeBars from './ThreeBars';
import './Navbar.css'
import ContactModal from '../Modal/ContactModal';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [openContactModal, setOpenContactModal] = useState(false);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const handleLogout = () => {
        try {
            dispatch(logout(user.access_token));
            window.location = '/';
        } catch (error) {
            console.error('Error on logout : ', error);
        }
    }

    const showContactModal = () => {
        setOpenContactModal(true);
    }
    const hideContactModal = () => {
        setOpenContactModal(false);
    }

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
                {
                    !user && (
                        <ul>
                            <li>
                                <a href='/login'>Connexion</a>
                            </li>
                            <li>
                                <a href='/register'>Inscription</a>
                            </li>
                            <li>
                                <a href='#' onClick={showContactModal}>Contact</a>
                            </li>
                        </ul>
                    )
                }
                {
                    user && (
                        <ul>
                            <li>
                                <a href='/dashboard'>Dashboard</a>
                            </li>
                            <li>
                                {user.first_name} {user.last_name}
                            </li>
                            <li>
                                <a href='#' onClick={handleLogout}>Déconnexion</a>
                            </li>
                        </ul>
                    )
                }
            </div>

            <ContactModal open={openContactModal} handleClose={hideContactModal} />
        </nav>
    )
}
