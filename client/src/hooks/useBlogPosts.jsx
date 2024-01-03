import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useBlogPosts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { navigate, posts, isError, isLoading };
}

export default useBlogPosts;