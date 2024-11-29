import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug)
            .then((post) => {
                if(post) {
                    setPost(post)
                }
            }) 
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost
