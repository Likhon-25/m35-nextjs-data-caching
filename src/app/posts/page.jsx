import Error from "next/error";
import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

// -----------JS __ Try & Catch __ --------------
// const getPosts2 = async () => {
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
//   }
//   catch(error){
//     throw new Error('Failed to fetch posts')
//   }
// };

// ------------------------------------------------

// const getPosts3 = async () =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if(!res.ok){
//         throw new Error('Faild to fetch posts')
//     }
//   return res.json();
// }

const PostPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-blue-600 m-52">
        Hello Post  hello: {posts.length}
      </h2>
    </div>
  );
};

export default PostPage;
