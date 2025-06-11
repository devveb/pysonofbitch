// src/components/PostList.jsx
import React, { useState } from "react";
import { posts } from "../data/posts";

export default function PostList() {
    const [selectedId, setSelectedId] = useState(null);

    const selectedPost = posts.find((p) => p.id === selectedId);

    return (
        <div style={{ padding: "1rem" }}>
            {!selectedId ? (
                <>
                    <h2>공부하러 가기 - 글 목록</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <button
                                    onClick={() => setSelectedId(post.id)}
                                    style={{ cursor: "pointer", background: "none", border: "none", color: "blue", textDecoration: "underline" }}
                                >
                                    {post.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <button onClick={() => setSelectedId(null)}>&lt; 뒤로가기</button>
                    <h2>{selectedPost.title}</h2>
                    <pre style={{ whiteSpace: "pre-wrap" }}>{selectedPost.content}</pre>
                </>
            )}
        </div>
    );
}
