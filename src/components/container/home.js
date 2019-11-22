import React from 'react';
import { connect } from 'react-redux';

import HomeView from '../presentation/home-view';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        starredMeditations: state.starredMeditations
    }
}

export default connect(mapStateToProps)(HomeView);