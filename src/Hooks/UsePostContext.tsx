// Context
import { PostContext } from "../Context/PostContext";

// Hooks
import { useContext, useState, ReactNode} from "react";

// Types
import { contextType, postType } from "../Context/PostContext";

type Props = {
  children: ReactNode;
}

export const UsePostContext = ({children}: Props) => {
  const [posts, setPosts] = useState<postType[]>([])
  return(
    <PostContext.Provider value={[posts, setPosts]}>
      {children}
    </PostContext.Provider>
  )
}

export const GetPostContext = () => {
  return useContext<contextType>(PostContext)
}