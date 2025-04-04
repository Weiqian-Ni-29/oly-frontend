import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../../assets/imgs/common/logo.png';
import LanguageSwitcher from './LanguageSwitcher';
function NavBar(props) {
    const navigate = useNavigate();
    // 点击时执行的跳转函数
    const handleClick = (event) => {
      event.stopPropagation();  // 阻止事件冒泡
      navigate('/en');
    };
    
    useEffect(() => {
        // 页面加载时滚动到顶部
        window.scrollTo(0, 0);
    }, []);
    return(
        <header className='navbar-custom'>
            <div className="logo-custom" onClick={handleClick}>
                <img src={logo} alt="Logo" />
            </div>
            <h2 className='nav-h2-custom'>{props.title}</h2>
            <div className='language-switcher-container-custom'>
                <LanguageSwitcher/>
            </div>
        </header>
    );
}
export default NavBar;