<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react'
=======
import React, { useState } from 'react'
import CommentList from '../../components/DiscussionContainer'
>>>>>>> javi
import DiscussionContainer from '../../components/DiscussionContainer'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import PostContainer from '../../components/PostContainer'
import SideBar from '../../components/SideBar'
import PostService from '../../services/postService'
import './styles.css';

const Home = () => {
    const postService = new PostService();
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const [posts, setPosts] = useState([]) //posts[0]
    const [selectedPost, setSelectedPost] = useState(null) //posts[0]
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    const getPosts = useCallback(async () => {
        try {
            var posts = await postService.getAllPosts();
            console.log(posts.posts.posts);
            setPosts(posts.posts.posts);
        } catch (e) {
            console.log(e);
        }
    }, [])


    //this loads when the page loads
    useEffect(() => {
        getPosts();
    }, [])

    const updateSelectedPost = (post) => {
        setSelectedPost(post);
        console.log(`Selected post id: ${post.id}`);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <div className="posts-discussion-wrapper">
                <ul className="posts-list-container">
                    {posts.map(post => (
                        <li key={post._id} onClick={() => updateSelectedPost(post)}>
                            <PostContainer post={post} />
                        </li>
                    ))}
                </ul>
<<<<<<< HEAD
                <DiscussionContainer />
=======
                <DiscussionContainer/>
>>>>>>> javi
            </div>
            <Footer />
        </>
    )
}

export default Home