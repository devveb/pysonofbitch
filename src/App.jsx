// src/App.jsx
import React, { useState } from "react";
import PostList from "./components/PostList";

import { Link } from 'react-router-dom';
import "./css/Common.css";

export default function App() {
    const [showPosts, setShowPosts] = useState(false);

    if (showPosts) {
        return <PostList onBack={() => setShowPosts(false)} />;
    }

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "auto" }}>
            <h1 style={{ color: "navy" }}>Coding is Writing</h1>
            <p><em>Half Developer, Half Writer, Full-time Dreamer — &lt;im&gt;Taehyeong /&lt;im&gt;</em></p>

            <section>
                <h2>About Me</h2>
                <p>HelloWorld! I am Taehyeong Kim, a developer with 13 years of experience.<br/>
                    I share diverse real-world problem-solving experiences and up-to-date tech stacks.</p>
            </section>

            <section>
                <h2>Core Skills</h2>
                <ul>
                    <li>Java, JSP, Javascript, Spring MVC/Boot/Batch, </li>
                    <li>Currently learning Python</li>
                    <li>Docker, Git, CI/CD toolchains</li>
                    <li>Video editing and content production experience</li>
                </ul>
            </section>

            <section>
                <h2>Key Projects</h2>
                <ul>
                    <li>
                        <strong>Freelancer — Intelligent Platform Business Team (Sep 2025 – Jan 2025)</strong><br/>
                        <ul>
                            <li>Developed JSON parsing API for AI chat data processing.</li>
                            <li>Designed and developed Spring Batch batch system for statistical data aggregation.</li>
                            <li>Developed APIs for real-time statistical dashboards.</li>
                            <Link to="/project/intelligent-platform"  className="link-style">See details</Link><br/>
                        </ul>
                    </li>
                    <li>
                        <strong>Freelancer — Closing Part Freelancer (Jul 2018 – Aug 2021)</strong><br/>
                        <ul>
                            <li>Developed JSON parsing API for AI chat data processing.</li>
                            <li>Designed and developed Spring Batch batch system for statistical data aggregation.</li>
                            <li>Developed APIs for real-time statistical dashboards.</li>
                            <Link to="/project/intelligent-platform"  className="link-style">See details</Link><br/>
                        </ul>
                    </li>
                    <li>
                        <strong>Yap Company — Platform Development Team 2, Assistant Manager (Jan 2015 – Jun 2018)</strong><br/>
                        <ul>
                            <li>Developed YapOrder beacon-based ordering service.</li>
                            <li>Participated in Data Voucher Project.</li>
                            <li>Developed COVID-19 contact tracking POC.</li>
                            <li>Developed route guidance system for mobility-impaired (Seoul Metro).</li>
                            <li>Developed Facebook chatbot ordering system.</li>
                            <li>Built location-based commercial district analysis platform.</li>
                            <li>Developed API for Samsung Technology Exhibition docent app.</li>
                            <li>Developed YapWork attendance and community management service.</li>
                            <li><Link to="/project/intelligent-platform"  className="link-style">See details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <strong>T-on Media — Research Team Member (Dec 2013 – Dec 2014)</strong><br/>
                        <ul>
                            <li>Developed SK BTV video workflow system.</li>
                            <li>Developed CJ ENM TVING PC bang admin site.</li>
                            <li>Built hybrid app webview and management system.</li>
                            <li>Developed admin site for monitoring malicious comments.</li>
                            <li>Developed entertainment app admin and API.</li>
                            <li>Developed keyword extraction and analysis solution for Cheil Worldwide.</li>
                            <li>Integrated and renewed Copyright Management System for Korean Film Council.</li>
                            <li>Supported point reward app service with admin/API development and CS.</li>
                            <li><Link to="/project/intelligent-platform"  className="link-style">See details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <strong>ChoeumSoft — Development Team Member (Aug 2012 – Aug 2013)</strong><br/>
                        <ul>
                            <li>Maintained mass mailing solution.</li>
                            <li>Customized survey solution and developed interfaces for Doruko.</li>
                            <li><Link to="/project/intelligent-platform"  className="link-style">See details</Link></li>
                        </ul>
                    </li>
                    <li>

                        <strong>Abercus — Information Application Business Team Member (Aug 2012 – Aug 2013)</strong><br/>
                        <ul>
                            <li>Participated in next-generation project for Mongolian telecom company (UNITEL).</li>
                            <li><Link to="/project/intelligent-platform"  className="link-style">See details</Link></li>
                        </ul>
                    </li>
                </ul>
            </section>


            
            <section style={{ marginTop: 40, backgroundColor: "#f9f9f9", padding: 20, borderRadius: 8, boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}>
                <h2>31.3.2026 / Magok, Seoul.</h2>
                <p style={{ lineHeight: 1.6, whiteSpace: "pre-line", fontStyle: "italic" }}>
                    {`
                    
                    올해 초 새로운 프로젝트에 합류하라는 지시로 지금은 마곡에서 고도화 프로젝트에 참여하고 있어요.
                    '고도화'란 말은 많이도 들었던 프로젝트인데 들을때마다 참 모호한 단어구나라는 생각이 듭니다. 
                    그래서 지금 무슨일을 하냐고 물으신다면, 첫째 Java 버전업 As-is에 적용되어 있던 1.7버전을 21로 올리고 있습니다.
                    둘째 Spring framework 적용하고 있습니다. 기존에는 별다른 프레임워크 없이 컴파일만해서 쉘 스크립트로 클래스 파일을 호출하는 구조입니다. 
                    생각해보니 프레임워크 없는 구조는 처음 접해보는것이군요. 예전(프레임워크 출현전)에는 많은 시스템이 이런 형상이었을텐데 말이죠.
                    그리고 리눅스 서버에서 AWS로 이사중입니다. 아직도 모호한 부분, 단어가 많은데 오늘은 이쯤에서 메모를 마칩니다. 
                    `}
                </p>
            </section>
            





            <section>
                <h2>Contact</h2>
                <p>Email: dev.taek@gmail.com</p>
                <p>Phone: +82-10-1234-5678</p>
                {/*<p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>*/}
            </section>


            <section>
                <button
                    onClick={() => setShowPosts(true)}
                    style={{ marginTop: 20, padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
                >
                    Python을 ChatGpt와 공부중입니다..
                </button>
            </section>
        </div>
    );
}
