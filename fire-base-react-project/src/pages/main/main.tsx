import {getDocs,collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
import {useState,useEffect} from 'react'
import { Post } from './post';

export interface Post{
    title:string;
    userId: string;
    username: string;
    description: string;
    id: string;
}
export const Main = ()=>{
    const postRef = collection(db,'posts')
    const [postList,setPostList] = useState<Post[] | null>(null);

    const getPost = async ()=>{
        const data = await getDocs(postRef)
        setPostList(data.docs.map((doc)=>({...doc.data(), id : doc.id} ))as Post[]);
    }

    useEffect(()=>{
        getPost();
    },[]);
    return (
    <div>{postList?.map((post)=>(<Post post={post}/>))}</div>
    )
}