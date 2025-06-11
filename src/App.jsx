// src/App.jsx
import React, { useState } from "react";
import PostList from "./components/PostList";

export default function App() {
    const [showPosts, setShowPosts] = useState(false);

    if (showPosts) {
        return <PostList onBack={() => setShowPosts(false)} />;
    }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "red" }}>PySonOfBitch</h1>
      <p>Python을 욕하면서 배우는 개발자 생존 사이트.</p>
      <ul>
        <li>배포? 귀찮아.</li>
        <li>속도? 느려.</li>
        <li>타입? 약해.</li>
        <li>그래도 결국 써야 해.</li>
      </ul>
        <button onClick={() => setShowPosts(true)}>공부하러 가기</button>
    </div>
  );
}
