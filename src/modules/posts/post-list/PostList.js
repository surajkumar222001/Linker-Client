import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import * as userReducer from '../../../redux/users/user.reducer';
import * as postActions from '../../../redux/posts/post.actions';
import * as postReducer from '../../../redux/posts/post.reducer';
import Spinner from "../../../layout/misc/spinner/Spinner";

let PostList = () => {
    let [localPost , setLocalPost] = useState({
        text : '',
        image : ''
    });

    let dispatch = useDispatch();

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey];
    });

    let {user} = userInfo;

    let postInfo = useSelector((state) => {
        return state[postReducer.postsFeatureKey];
    });

    let {loading , posts} = postInfo;

    useEffect(() => {
        dispatch(postActions.getAllPosts());
    }, []);

    let updateInput = (e) => {
        setLocalPost({
            ...localPost,
            [e.target.name] : e.target.value
        });
    };

    let submitCreatePost = (e) => {
        e.preventDefault();
        dispatch(postActions.createPost(localPost));
        setLocalPost({
            text : '',
            image: ''
        });
    };

    let clickDeletePost = (postId) => {
        dispatch(postActions.deletePost(postId));
    };

    let clickLikePost = (postId) => {
        dispatch(postActions.likePost(postId));
    };

    let clickUnLikePost = (postId) => {
        dispatch(postActions.unlikePost(postId));
    };

    return (
        <React.Fragment>
           {/* <pre>{JSON.stringify(localPost)}</pre>*/}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                Welcome to React Social Community
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi dolores excepturi quaerat qui quia ullam ut voluptas! Aperiam corporis cumque eum harum, impedit necessitatibus nostrum optio rem repellat saepe?</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            Object.keys(user).length > 0 &&
                            <div className="col-md-8">
                                <form onSubmit={submitCreatePost}>
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src={user.avatar} alt="" width="50" height="50" className="rounded-circle"/>
                                        </span>
                                        </div>
                                        <textarea
                                            required
                                            name="text"
                                            value={localPost.text}
                                            onChange={updateInput}
                                            rows="3" className="form-control" placeholder="Whats on your mind.."/>
                                    </div>
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            Image Url
                                        </span>
                                        </div>
                                        <input
                                            required
                                            name="image"
                                            value={localPost.image}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="Image Url"/>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-teal btn-sm" value="Post"/>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <hr/>
                </div>
            </section>
            <section>
                {
                    loading ? <Spinner/> :
                        <React.Fragment>
                            {
                                posts.length > 0 &&
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            {
                                                posts.map(post => {
                                                    return (
                                                        <div className="card my-2" key={post._id}>
                                                            <div className="card-body bg-light-grey">
                                                                <div className="row">
                                                                    <div className="col-md-2">
                                                                        <img src={post.avatar} alt="" className="rounded-circle" width="50" height="50"/><br/>
                                                                        <small>{post.name}</small>
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <img src={post.image} alt="" className="img-fluid d-block m-auto"/>
                                                                            </div>
                                                                        </div>
                                                                        <p>{post.text}</p>
                                                                        <small>date</small><br/>
                                                                        <button className="btn rgba-green-light btn-sm" onClick={clickLikePost.bind(this,post._id)}>
                                                                            <i className="fa fa-thumbs-up"/> {post.likes.length}
                                                                        </button>
                                                                        <button className="btn rgba-red-light btn-sm" onClick={clickUnLikePost.bind(this,post._id)}>
                                                                            <i className="fa fa-thumbs-down"/>
                                                                        </button>
                                                                        <Link to={`/posts/${post._id}`} className="btn rgba-blue-light btn-sm">
                                                                            <i className="fab fa-facebook-messenger"/> Discussions {post.comments.length}
                                                                        </Link>
                                                                        {
                                                                            post.user === user._id ?
                                                                            <button className="btn rgba-amber-light btn-sm" onClick={clickDeletePost.bind(this,post._id)}>
                                                                                <i className="fa fa-times-circle"/>
                                                                            </button> : null
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                }
            </section>
        </React.Fragment>
    )
};
export default PostList;
