import { connect } fom 'react-redux';

import {
    addLike,
    addComment,
    addPost,
    deletePost
} from '../../../actions';

import PostView from '../../presentation/posts-view';

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentHandler: (post_id, comment) => {
            dispatch(addComment(post_id, comment));
        },
        addLikeHandler: (image_id) => {
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
)(PostView);