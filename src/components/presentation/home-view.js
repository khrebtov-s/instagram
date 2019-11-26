import React from 'react'

import User from './user-view'
import Posts from '../container/posts'

const Home = props => (
    <div>
        <User />
        <Posts posts={props.posts} />
    </div>
)

export default Home
