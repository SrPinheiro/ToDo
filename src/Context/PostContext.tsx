import { createContext } from "react";

export type postType = {
  title: string;
  difficulty: number;
};

export type contextType = [
  posts: postType[],
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>
]

export const PostContext = createContext<contextType>([[], () => {}]);
