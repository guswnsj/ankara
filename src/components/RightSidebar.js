import React from 'react';
import './RightSidebar.css'; // CSS 파일 임포트

function RightSidebar() {
    // 데이터 예시
    const popularPosts = [
        { id: 1, title: "게시글 제목 1", description: "게시글 설명 1" },
        { id: 2, title: "게시글 제목 2", description: "게시글 설명 2" },
        { id: 3, title: "게시글 제목 3", description: "게시글 설명 3" }
    ];
    const recentPosts = [
        { id: 1, title: "최근 게시물 1" },
        { id: 2, title: "최근 게시물 2" },
        { id: 3, title: "최근 게시물 3" }
    ];
    const recentComments = [
        { id: 1, comment: "댓글 내용 1", by: "사용자 1" },
        { id: 2, comment: "댓글 내용 2", by: "사용자 2" },
        { id: 3, comment: "댓글 내용 3", by: "사용자 3" }
    ];

    return (
        <div className="right-sidebar">
            <div className="news-box">
                <h3>인기 게시글</h3>
                <ul>
                    {popularPosts.map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong> - {post.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="news-box">
                <h3>최근 게시물</h3>
                <ul>
                    {recentPosts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
            <div className="news-box">
                <h3>최근 댓글</h3>
                <ul>
                    {recentComments.map(comment => (
                        <li key={comment.id}>{comment.comment} - <em>{comment.by}</em></li>
                    ))}
                </ul>
            </div>
            <div className="ad-banner">
                <h3>광고</h3>
                <p>여기에 광고 내용을 넣으세요.</p>
            </div>
        </div>
    );
}

export default RightSidebar;
