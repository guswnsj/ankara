import React from 'react';
import './Header.css'; // 헤더 전용 CSS 파일

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="img/Logo.png" alt="앙까라 로고" style={{ height: '70px', verticalAlign: 'middle' }} />
                </div>
                <h1 className="title">ㅇㄲㄹ</h1>
                <nav>
                    <ul>
                        <li><a href="About.html">알림</a></li>
                        <li><a href="Photos.html">북마크</a></li>
                        <li><a href="Contact.html">검색</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
