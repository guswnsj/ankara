import React from 'react';
import './MainContent.css'; // 메인 콘텐츠 전용 CSS 파일
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

// 보드 제목 리스트
const boardTitles = [
  "유튜브 숏폼 Top10", 
  "유튜브 롱폼 Top10", 
  "네이버 뉴스(정치)", 
  "네이버 뉴스 (경제)", 
  "네이버 뉴스(스포츠)", 
  "네이버 뉴스(게임)", 
  "커뮤니티 게시판 최신글", 
  "커뮤니티 게시판 인기글"
];

function MainContent() {
    return (
        <div className="App">
        <Header />
        <div className="container">
            <LeftSidebar />
            <div className="main-content">
                {boardTitles.map((title, index) => (
                    <div key={index} className="board-row">
                        <div className="board">
                            <div className="board-title">{title}</div>
                            {/* 새로운 보드 추가 */}
                            <div className="sub-board">
                                <div className="sub-board-content">
                                    새로운 내용 1<br/>
                                    새로운 내용 2<br/>
                                    새로운 내용 3
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <RightSidebar />
        </div>
        <Footer />
        </div>
    );
}

export default MainContent;
