import {useState, useEffect} from 'react'
import './home.css'
import Header from '../../Components/Header/header'
import Posts from '../../Components/Posts/posts'
import Sidebar from '../../Components/Sidebar/sidebar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([]); // posts is an array of objects
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])
  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar/>
      </div>
    </>
  )
}

export default Home
