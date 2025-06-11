// src/App.jsx

import React from "react";

export default function App() {
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
      <button onClick={() => alert("공부하러 갑니다!")}>공부하러 가기</button>
    </div>
  );
}
