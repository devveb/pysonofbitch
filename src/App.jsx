// src/App.jsx
import React, { useState } from "react";
import PostList from "./components/PostList";

export default function App() {
    const [showPosts, setShowPosts] = useState(false);

    if (showPosts) {
        return <PostList onBack={() => setShowPosts(false)} />;
    }

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 800, margin: "auto" }}>
            <h1 style={{ color: "red" }}>PySonOfBitch</h1>
            <p><em>A developer survival site for learning Python with some frustration.</em></p>

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
                        <strong>Freelancer — Intelligent Platform Business Team (Sep 2021 – Jan 2025)</strong><br/>
                        Developed JSON parsing API for AI chat data processing.<br/>
                        Designed and developed Spring Batch batch system for statistical data aggregation.<br/>
                        Developed APIs for real-time statistical dashboards.
                    </li>
                    <li>
                        <strong>Freelancer — Closing Part Freelancer (Jul 2018 – Aug 2021)</strong><br/>
                        Role: SI Development.
                    </li>
                    <li>
                        <strong>Yap Company — Platform Development Team 2, Assistant Manager (Jan 2015 – Jun 2018)</strong><br/>
                        Developed YapOrder beacon-based ordering service.<br/>
                        Participated in Data Voucher Project.<br/>
                        Developed COVID-19 contact tracking POC.<br/>
                        Developed route guidance system for mobility-impaired (Seoul Metro).<br/>
                        Developed Facebook chatbot ordering system.<br/>
                        Built location-based commercial district analysis platform.<br/>
                        Developed API for Samsung Technology Exhibition docent app.<br/>
                        Developed YapWork attendance and community management service.
                    </li>
                    <li>
                        <strong>Tion Media — Research Team Member (Dec 2013 – Dec 2014)</strong><br/>
                        Developed SK BTV video workflow system.<br/>
                        Developed CJ ENM TVING PC bang admin site.<br/>
                        Built hybrid app webview and management system.<br/>
                        Developed admin site for monitoring malicious comments.<br/>
                        Developed entertainment app admin and API.<br/>
                        Developed keyword extraction and analysis solution for Cheil Worldwide.<br/>
                        Integrated and renewed Copyright Management System for Korean Film Council.<br/>
                        Supported point reward app service with admin/API development and CS.
                    </li>
                    <li>
                        <strong>ChoeumSoft — Development Team Member (Aug 2012 – Aug 2013)</strong><br/>
                        Maintained mass mailing solution.<br/>
                        Customized survey solution and developed interfaces for Doruko.
                    </li>
                    <li>
                        <strong>Abercus — Information Application Business Team Member (Aug 2012 – Aug 2013)</strong><br/>
                        Participated in next-generation project for Mongolian telecom company (UNITEL).
                    </li>
                </ul>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Email: dev.taek@gmail.com</p>
                <p>Phone: +82-10-1234-5678</p>
                <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">github.com/yourgithub</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
            </section>


            <section>
                <button
                    onClick={() => setShowPosts(true)}
                    style={{ marginTop: 20, padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
                >
                    공부하러 가기 (Python 관련 글)
                </button>
            </section>
        </div>
    );
}
