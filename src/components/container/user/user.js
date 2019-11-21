import React from 'react';
import { connect } from 'react-redux';

// import HomeView from '../presentation/HomeView';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        starredMeditations: state.starredMeditations
    }
}

// export default connect(mapStateToProps)(HomeView);


// const User = (props) => {
//     const { min, src, alt, name } = props;
//     return (
//         <a href="$" className={min ? "user min" : "user"}>
//             <img src={src} alt={alt} />
//             <div>{name}</div>
//         </a>
//     );
// }

