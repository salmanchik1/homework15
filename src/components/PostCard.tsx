import React, { useState } from "react";
import styled from "styled-components";
import PostMenu from "./PostMenu";

interface PostCardProps {
    id: number;
    title: string;
    content: string;
    onRemove: (id: number) => void;
}

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 400px;
    position: relative;
    transition: all 0.3s ease;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 300px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const MenuButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
    right: 10px;
    top: 6px;
`;

const PostCard: React.FC<PostCardProps> = ({
    id,
    title,
    content,
    onRemove,
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [postContent, setPostContent] = useState(content);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleEdit = () => {
        const newContent = prompt("Enter new content:", postContent);
        if (newContent) {
            setPostContent(newContent);
        }
    };

    const handleRemove = () => {
        if (window.confirm("Are you sure you want to remove this post?")) {
            onRemove(id);
        }
    };

    return (
        <Card>
            <h2>{title}</h2>
            <p>{postContent}</p>
            <p>{isFavorite ? "🌟 Favorite" : ""}</p>
            <MenuButton onClick={toggleMenu}>⫶</MenuButton>
            {showMenu && (
                <PostMenu
                    onFavorite={toggleFavorite}
                    onEdit={handleEdit}
                    onRemove={handleRemove}
                />
            )}
        </Card>
    );
};

export default PostCard;
