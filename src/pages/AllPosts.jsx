import React, { useEffect, useState } from 'react'
import { Conatiner, PostCard } from '../components'
import appwriteService from "../appwrite/conf"

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      // Fetch posts from Appwrite
      appwriteService.getPosts()
        .then((post) => {
          if (post) {
            setPosts(post.documents);
          }
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }, []); 
    // appwriteService.getPosts([])
    // .then((posts) => {
    //   if(posts) {
    //     setPosts(posts.documents)
    //   }
    // })
  return (
    <div className='w-full py-8'>
      <Conatiner>
        <div className='flex flex-wrap'>
          {posts.map((post) => {
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post}/>
            </div>
          })}
        </div>
      </Conatiner>
    </div>
  )
}

export default AllPosts
