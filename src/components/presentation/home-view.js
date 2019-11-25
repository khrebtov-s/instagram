import React from 'react';

import User from './user-view';
import Posts from '../container/posts';
// import Footer from './FooterView';

const Home = props => {
    <>
        <User />
        <Posts posts={props.posts} />
        {/* <Footer starred={props.starredMeditations} /> */}
    </>
}

export default Home;