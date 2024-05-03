import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 페이지의 스크롤 위치가 맨 밑일 때 푸터를 보이게 함
            const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
            setIsVisible(bottom);
        };

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className={isVisible ? 'footer-visible' : ''}>
            <p>앙까라Ankara © 2024</p>
        </footer>
    );
}

export default Footer;
