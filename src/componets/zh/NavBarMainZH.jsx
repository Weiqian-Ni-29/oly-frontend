import '../styles/NavBarMain.css';
import logo from '../../assets/imgs/common/logo.png';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../en/LanguageSwitcher';
function NavBarMainZH() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <a href="#products"><h3>产品</h3></a>
                <a href="#technique"><h3>工艺</h3></a>
                <Link to="/AboutUs/zh"><h3>关于我们</h3></Link>
                <div className="language-switcher-container">
                    <LanguageSwitcher/>
                </div>
            </nav>
        </header>
    );
}
export default NavBarMainZH;