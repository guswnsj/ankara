import React from 'react';
import './MainContent.css'; // 메인 콘텐츠 전용 CSS 파일

function MainContent() {
    return (
        <div className="main-content">
            <div className="section">
                <h2>환영합니다!</h2>
                <p>가족 홈페이지에 오신 것을 환영합니다. 여기서 우리 가족의 이야기와 추억을 공유하려고 합니다.</p>
            </div>
            <div className="section">
                <h2>- 캘린더</h2>
                <img src="img/Calendar.jpg" alt="캘린더" style={{ width: '100%', height: 'auto' }} />
                <p>캘린더를 눌러 중요한 가족 행사 및 일정을 확인하세요.</p>
            </div>
        </div>
    );
}

export default MainContent;
