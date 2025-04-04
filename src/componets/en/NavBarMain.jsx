import '../styles/NavBarMain.css';
import logo from '../../assets/imgs/common/logo.png';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
function NavBarMain() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <a href="#products"><h3>Products</h3></a>
                <a href="#technique"><h3>Technique</h3></a>
                <Link to="/AboutUs/en"><h3>About Us</h3></Link>
                <div className="language-switcher-container">
                    <LanguageSwitcher/>
                </div>
            </nav>
        </header>
    );
}
export default NavBarMain;