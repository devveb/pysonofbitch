// src/App.jsx
import React, { useState } from "react";

import ProjectDetail from "./components/IxiProj";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";


export function RouterSetup() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/project/intelligent-platform" element={<ProjectDetail />} />
                {/* 다른 프로젝트 상세 경로도 추가 가능 */}
            </Routes>
        </BrowserRouter>
    );
}