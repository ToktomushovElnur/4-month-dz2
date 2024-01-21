import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsonplaceholderApi } from "../api";

const CreatePostPage = () => {
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");
    const navigate = useNavigate();

    const createPost = async () => {
        try {
            const response = await jsonplaceholderApi.post("/posts", {
                title: newPostTitle,
                body: newPostBody,
            });

            console.log("Пост успешно создан", response.data);
            navigate("/posts");
        } catch (error) {
            console.error("Ошибка при создании поста", error);
        }
    };

    return (
        <div>
            <h2>Создание нового поста</h2>
            <input
                type="text"
                placeholder="Заголовок"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <textarea
                placeholder="Текст поста"
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
            />
            <button onClick={createPost}>Создать пост</button>
        </div>
    );
};

export default CreatePostPage;
