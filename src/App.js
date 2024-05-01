import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/Maincontent';
import './App.css'; // 전역 스타일

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <LeftSidebar />
                <MainContent />
                <RightSidebar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
