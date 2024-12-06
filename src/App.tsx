import React, { useState } from "react";
import styled from "styled-components";
import PostCard from "./components/PostCard";

interface Post {
    id: number;
    title: string;
    content: string;
    onRemove: (id: number) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        font-size: 2.2em;
    }
`;

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: "Post 1",
            content: "This is the body of post 1",
            onRemove: () => {},
        },
        {
            id: 2,
            title: "Post 2",
            content: "This is the body of post 2",
            onRemove: () => {},
        },
        {
            id: 3,
            title: "Post 3",
            content: "This is the body of post 3",
            onRemove: () => {},
        }
    ]);

    const handleRemovePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    }

    return (
        <Container>
            <Title>My Posts</Title>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    onRemove={handleRemovePost}
                />
            ))}
        </Container>
    );
};

export default App;
