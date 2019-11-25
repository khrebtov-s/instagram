import { connect } from 'react-redux';

import {
    addLike,
    addComment,
    addPost,
    deletePost
} from '../../actions';

import PostsView from '../presentation/posts-view';

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentHandler: (post_id, comment) => {
            dispatch(addComment(post_id, comment));
        },
        addLikeHandler: (post_id) => {
            dispatch(addLike(post_id));
        },
        addPostHandler: (image_id) => {
            dispatch(addPost(image_id));
        },
        deletePostHandler: (post_id) => {
            dispatch(deletePost(post_id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsView);