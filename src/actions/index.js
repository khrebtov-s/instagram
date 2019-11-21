export const addLike = (post_id) => {
    return {
        type: 'ADD_LIKE',
        post_id
    };
};

export const addComment = (post_id, comment) => {
    return {
        type: 'ADD_COMMENT',
        post_id,
        comment
    };
};

export const addPost = (image_id) => {
    return {
        type: 'ADD_POST',
        image_id
    };
};

export const deletePost = (post_id) => {
    return {
        type: 'DELETE_POST',
        post_id
    };
};