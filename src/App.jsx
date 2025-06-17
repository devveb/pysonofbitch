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
                <h2>소설도 씁니다.</h2>
                <p style={{ lineHeight: 1.6, whiteSpace: "pre-line", fontStyle: "italic" }}>
                    {`
                    오짜전

                    모두가 잠든 새벽 세 시에 부엌 냉장고를 뒤지는 사람은 이 정도의 글밖에는 쓸 수가 없다. 이 정도의 글을 쓴 사람에게 나는 항상 감사한다. 그가 좀 멍했었기 때문에, 그가 잠깐이라도 한눈을 팠기 때문에, 그가 제대로 정신 차리지 않았기 때문에 내가 태어날 수 있었다.
                    
                    나는 오자다. 완벽주의를 추구하는 작가의 날카로운 눈을 피했고, 교정 경력이 30년이 넘는 베테랑 편집자의 눈도 피했다. 나는 세상에 나왔지만 어떻게 나왔는지는 아무도 모른다. 나조차도 모른다. 그냥 우연히 살아남은 것이다. 억세게 운이 좋았던 것이다.
                    
                    인쇄소를 갓 빠져 나온 나와 내 수십만 동기들은 책 속에서 나란히 앉아 독자들을 기다리고 있다. 모두 잉크 비린내를 솔솔 풍긴다. 처음에는 그게 세상의 냄새려니 했다.
                    
                    드디어 누군가 손에 들어간 우리는 앞 페이지가 넘어가는 소리가 들릴 때마다 차례가 가까워짐을 느끼면서 설레고 있었다. 사람들이 책을 샀다는 것이 반드시 그 책을 다 읽는다는 것을 의미하는 게 아니라는 이해할 수 없는 풍문이 들리기도 했으나 믿지 않았다.
                    
                    비교적 얇은 책에 들어가 있었던 나와 내 동기들은 곧 우리 순서가 올 것이라고 굳게 믿고 있었다. 모두 조금이라도 더 눈에 띄는 글자가 되기 위해 나름의 준비를 하고 있었다.
                    
                    활자로 태어난다면 누구나 한 번쯤 누군가의 뇌리에 박히는 꿈을 꾼다. 그런 점에서 나는 일단 장점을 가지고 있다. 오자라면 누구나 고개를 갸우뚱하며 한 번씩은 더 봐주기 마련이니까. 일종의 게릴라 전략이라고도 할 수 있겠다. 우연히 재미있는 오자가 된다면 그 누구보다도 깊숙이 머릿속에 남을 수 있는 것이다.
                    
                    늦은 시간까지 페이지가 넘어가는 소리를 들었다. 꽤나 시끄러울 줄 알았던 그날 밤은 의외로 조용했다. 끝끝내 내가 앉아있던 페이지는 펼쳐지지 않았다.
                    
                    한 번 덮어진 책은 다시 열릴 줄을 몰랐다. 주인의 흥미를 좀 더 북돋우지 못한 앞 페이지의 동기들을 욕하기도 하고, 참고도서 면이나 겨우 면한 페이지에 앉게 된 자신의 자리 운을 탓하기도 하며 지내던 중이었다.
                    
                    거의 단념하고 있을 때쯤이었다. 책장을 넘기는 손의 온기가 느껴질 정도로 가까운 페이지가 열리기 시작한 것이다. 본능적으로 나는 말로만 듣던 가을이 왔구나 하는 생각이 들었다. 내 생각은 적중하였다. 책의 계절인 가을이 온 것이다.
                    
                    그러는 사이 바로 앞 페이지가 펼쳐지더니 드디어 나를 무겁게 누르고 있던 페이지가 열리기 시작하였다. 거대한 그림자가 걷히면서 눈부시게 빛나는 태양이 비치는 것이 흡사 개기일식의 그것과 닮았다.
                    
                    아! 이것이 가을 하늘이구나! 이 최고의 장을 보려고 그동안 고생의 시간이 있었던 것이구나! 만감이 교차하는 순간이었다. 그러는 것도 잠시, 인제 곧 선택의 순간이다. 최대한 독자의 눈에 띄게 간택을 바라는 새색시처럼 곱게 앉았다.
                    
                    그런데 시선이 느껴지지 않는다. 보이는 것이라고는 새근거리는 콧구멍 두 개, 쩍 벌어진 입구녕 하나가 전부다. 당황해서 위를 보고 있는데 질펀한 국물이 정수리 위에 떨어진다. 침이다. 크기로 보나 양으로 보나 맞아서는 안 되는 것이었다.
                    
                    배부터 입수하는 다이빙을 해본 사람들은 알 것이다. 물이라는 것이 얼마나 단단한 것인지. 나는 기절하고 말았다. 내 몸이 흐물흐물 녹아 내리더니 그대로 눌러앉아 버렸다. 좀 어찌해보려 책 주인이 황급히 침을 훔쳐낸다는 것이 괜한 살갗만 벗겨 내고 말았다.
                    
                    찢어지는 아픔에 깨어나 보니 눈앞이 뿌옇다. 살갗도 주름이 져 있다. 희지도 검지도 않은 것이 정체불명이다. 한숨 더 자서 이 어처구니없는 일들을 잊어버린다면 어떨까?
                    
                    나는 이제 문자도 오자도 아니다. 의미불명이다.
                    `}
                </p>
            </section>


            <section style={{ marginTop: 40, backgroundColor: "#f9f9f9", padding: 20, borderRadius: 8, boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}>
                <h2>Short Story — "Typo Story"</h2>
                <p style={{ lineHeight: 1.6, whiteSpace: "pre-line", fontStyle: "italic" }}>
                    {`
                    Typo Story

                    At three in the morning, when everyone is asleep, the person rummaging through the kitchen fridge can only write words like these. I am always grateful to the one who wrote these words. Because he was a bit absent-minded, because he looked away for a moment, because he wasn’t fully focused—that’s how I came to be.
                    
                    I am a typo. I escaped the sharp eyes of perfectionist writers and the veteran editors with over 30 years of proofreading experience. I came into this world, but no one really knows how. Not even I do. I just survived by chance. I was unbelievably lucky.
                    
                    Fresh out of the printing press, my hundreds of thousands of comrades and I sit side by side inside the book, waiting for readers. We all carry the faint smell of ink. At first, I thought it was the scent of the world.
                    
                    Finally, when someone picks up the book and turns the pages, we feel our turn getting closer, filled with excitement. I heard strange rumors that buying a book didn’t necessarily mean reading it, but I didn’t believe them.
                    
                    My comrades and I, trapped inside a relatively thin book, firmly believed our turn would come soon. We were all preparing in our own ways to become letters that would catch the eye just a little more.
                    
                    Anyone born as a letter hopes to one day leave a mark in someone’s mind. In that sense, I have one advantage. As a typo, people tend to notice me more and give me a second look with a curious tilt of the head. It’s like a guerrilla strategy. If by chance I become a funny typo, I can remain deep in someone’s memory longer than anyone else.
                    
                    I heard the sound of pages turning late into the night. The night, which I thought would be noisy, was surprisingly quiet. The page where I sat was never opened.
                    
                    Once closed, the book seemed never to open again. I spent my days cursing my fellow letters on the previous pages that couldn’t capture the owner’s interest, and blaming my own unlucky spot on barely making it past the references or appendix pages.
                    
                    Just when I was about to give up, I felt the warmth of a hand turning the pages, getting closer. Instinctively, I thought, “Autumn has come,” something I had only heard about in stories. My guess was right. The season of books—autumn—had arrived.
                    
                    The page right before me was finally opened, and at last, the heavy page holding me down began to lift. As the giant shadow cleared, the dazzling sunlight shone through—like a total solar eclipse.
                    
                    Ah! This is the autumn sky! The hardships I endured were all to see this greatest chapter! A moment filled with overwhelming emotions. But soon, the moment of choice arrived. I sat prettily, like a bride hoping to be chosen, praying to be noticed by the reader’s eye.
                    
                    But I felt no gaze. All I could see were two softly snoring nostrils and an open mouth. Confused, I looked up—and warm liquid dripped onto my head. It was saliva. Judging by its size and amount, it was something that should never have happened.
                    
                    Anyone who has ever done a belly-first dive into water knows how solid water can feel. I fainted. My body melted and sagged, collapsing where I was. The book’s owner hurriedly wiped the saliva away, but only managed to peel off some of my skin.
                    
                    Awakening from the tearing pain, my vision blurred. My skin was wrinkled, neither white nor black, an unidentifiable mess. Maybe if I sleep a little longer, I could forget this absurd ordeal?
                    
                    Now, I am no longer a letter or even a typo. I am meaningless.
                    `}
                </p>
            </section>

            <section style={{ marginTop: 40, backgroundColor: "#f9f9f9", padding: 20, borderRadius: 8, boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}>
                <h2>小説も書いています。</h2>
                <p style={{ lineHeight: 1.6, whiteSpace: "pre-line", fontStyle: "italic" }}>
                    {`
                    誤字伝

                    みんなが眠っている真夜中の３時、台所の冷蔵庫をあさる人はこんな文章しか書けない。こんな文章を書いた人にはいつも感謝している。彼が少しぼんやりしていたから、彼がほんの一瞬目をそらしたから、彼がちゃんと集中していなかったから、私が生まれることができた。
                    
                    私は誤字だ。完璧主義の作家の鋭い目をかいくぐり、校正歴30年以上のベテラン編集者の目も逃れた。私は世に出たが、どうやって出てきたのか誰にも分からない。自分でも分からない。ただ偶然生き残ったのだ。とんでもなく運が良かったのだ。
                    
                    印刷所から出たばかりの私と数十万の仲間たちは、本の中で並んで座り、読者を待っている。みんなインクの匂いをほのかに漂わせている。最初はそれが世の中の匂いだと思っていた。
                    
                    ついに誰かの手に取られ、ページがめくられる音を聞くたびに、自分の番が近づいているのを感じてワクワクしていた。人は本を買ったからといって必ずしも全部読むわけではないという理解できない噂も聞いたが、信じなかった。
                    
                    比較的薄い本に入っていた私たち仲間は、すぐに自分たちの番が来ると固く信じていた。みんな少しでも目立つ文字になるために、それぞれ準備をしていた。
                    
                    活字として生まれたら、誰でも一度は誰かの脳裏に刻まれる夢を見る。その点では私は一つの強みがある。誤字なら誰もが首をかしげながら一度は許してもらえるからだ。いわばゲリラ戦略と言える。偶然面白い誤字になれば、誰よりも深く記憶に残ることができるのだ。
                    
                    遅くまでページがめくられる音が聞こえた。騒がしいと思っていたあの夜は意外に静かだった。結局、私が座っていたページは開かれなかった。
                    
                    一度閉じられた本はもう開かれないと思われた。主人の興味をもっとそそらなかった前のページの仲間たちを呪い、参考文献ページややっとたどり着いたページに座る自分の運を嘆きながら過ごしていた。
                    
                    ほとんど諦めかけたころだった。本のページをめくる手の温もりが感じられるほど近いページが開き始めたのだ。本能的に「秋が来た」と聞いたことのある感覚がした。私の考えは的中した。本の季節、秋が来たのだ。
                    
                    その間にすぐ前のページが開かれ、ついに私を重く押さえつけていたページがめくられ始めた。巨大な影が晴れ、まばゆい太陽が差し込むさまは皆既日食に似ていた。
                    
                    ああ！これが秋の空か！この最高の章を見るためにこれまでの苦労があったのだ！感慨が込み上げる瞬間だった。しかしすぐに選ばれる瞬間が来た。できるだけ読者の目に留まるように花嫁のように美しく座った。
                    
                    しかし視線は感じられない。見えるのは、くすくすと寝息を立てる二つの鼻の穴と、大きく開いた口だけだった。戸惑って上を見ると、濡れた液体が頭に落ちてきた。よだれだ。大きさも量も許されないものだった。
                    
                    腹から入水したことのある人は知っているだろう。水がどれほど硬いかを。私は気を失った。体がとろけるように溶けて、そのまま沈み込んでしまった。慌てて本の持ち主がよだれをぬぐったが、余計に皮膚をはがしてしまった。
                    
                    裂ける痛みに目を覚ますと視界がかすんでいた。皮膚はしわだらけで、白くも黒くもない正体不明のものだった。もう一度眠って、このとんでもない出来事を忘れられたらいいのに。
                    
                    私はもはや文字でも誤字でもない。意味不明だ。
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
