import _ from 'lodash';

import InitialPostData from '../data/post';

const initialState = {
    posts: InitialPostData,
    starredMeditations: [23, 25, 27]
};

function _getUniqueId(collection) {
    // hoc assigns a unique id
    let MAX_ID = _.chain(collection)
        .map(c => c.id)
        .max()
        .value();
    MAX_ID = MAX_ID || 0;

    return MAX_ID + 1;
};

function add_like(state, action) {
    const { post_id } = action;

    let updated_posts = _.map(state, p => {
        if (p.id === post_id) {
            return Object.assign({}, p, {
                likes: p.likes + 1
            })
        } else {
            return p;
        }
    })
};

function add_comment(state, action) {
    const { post_id, comment } = action;

    let updated_posts = _.map(state, p => {
        if (p.id === post_id) {
            let updated_comments = p.comments;
            updated_comments.push(comment);
            let updated_post = {
                ...p,
                comments: updated_comments
            }
            return updated_post;
        } else {
            return p;
        }
    });

    return updated_post;
};

function add_post(state, action) {
    const { post_id } = action;
    return [
        ...state,
        {
            id: _getUniqueId(state),
            Image: `https://www.gstatic.com/webp/gallery/${image_id}.jpg`,
            likes: 0,
            timestamp: new Date(),
            comments: []
        }
    ]
};

function delete_post(state, action) {
    const { post_id } = action;
    // return all comments, except the remote
    return (
        _.reject(state, p => p.id === post_id);
    )
};

function postReducer(state = initialState.posts, action) {
    switch (action.type) {
        case 'ADD_LIKE':
            return add_like(state, action);
        case 'ADD_COMMENT':
            return add_comment(state, action);
        case 'ADD_POST':
            return add_post(state, action);
        case 'DELETE_POST':
            return delete_post(state, action);
        default:
            return state
    };
};