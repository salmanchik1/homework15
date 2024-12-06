import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
    position: absolute;
    top: 40px;
    right: 16px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;

    @media (max-width: 768px) {
        width: 100%;
        right: 0;
    }
`;

const MenuItem = styled.div`
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    width: 100%;
    text-align: left;

    &:hover {
        background: #f0f0f0;
    }
`;

interface PostCardProps {
    onFavorite: () => void;
    onRemove: () => void;
    onEdit: () => void;
}

const PostMenu: React.FC<PostCardProps> = ({ onFavorite, onEdit, onRemove }) => {
    return (
        <MenuContainer>
            <MenuItem onClick={onEdit}>Edit</MenuItem>
            <MenuItem onClick={onRemove}>Remove</MenuItem>
            <MenuItem onClick={onFavorite}>Favorite</MenuItem>
        </MenuContainer>
    );
};

export default PostMenu;
