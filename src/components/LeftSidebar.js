import React from 'react';
import './LeftSidebar.css'; // CSS 파일 임포트

function LeftSidebar() {
  // 리스트 데이터
  const lists = {
    musicCharts: [
      { id: 1, song: "노래 제목 1", artist: "가수 1" },
      // 다른 음원 차트 데이터...
      { id: 1, song: "노래 제목 2", artist: "가수 2" },
      { id: 1, song: "노래 제목 10", artist: "가수 10" },
    ],
    searchRankings: [
      { id: 1, term: "검색어 1" },
      // 다른 검색 순위 데이터...
      { id: 10, term: "검색어 10" }
    ]
  };

  return (
    <div className="left-sidebar">
      <div className="user-info-box">
        <h3>회원 정보</h3>
        <div className="user-detail">
          <p>이름: 홍길동</p>
          <p>등급: Gold Member</p>
          <p>가입일: 2023-01-01</p>
        </div>
      </div>
      <div className="chart-box">
        <h3>음원 차트</h3>
        <ul>
          {lists.musicCharts.map(chart => (
            <li key={chart.id}>
              <strong>{chart.song}</strong> - {chart.artist}
            </li>
          ))}
        </ul>
      </div>
      <div className="ranking-box">
        <h3>실시간 검색 순위</h3>
        <ul>
          {lists.searchRankings.map(ranking => (
            <li key={ranking.id}>{ranking.term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
