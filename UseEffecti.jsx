import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [content, setContent] = useState('posts')

    useEffect(() => {
        console.log("Content changed:",content);
    }, [content]);

  return (

    <div className='Container'>
    <p>{content}</p>
      <button onClick={()=>setContent('posts')}>Posts</button>
      <button onClick={()=>setContent('users')}>Users</button>
      <button onClick={()=>setContent('contents')}>Contents</button>
    </div>
  )
}

export default UseEffect
