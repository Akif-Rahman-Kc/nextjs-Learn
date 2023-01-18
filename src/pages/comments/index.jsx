import { useState } from "react"



const Comments = () => {
    const [ comments, setComments ] = useState([])
    const [ name, setName] = useState('')
    const [ item, setItem] = useState('')
    const [ comment, setComment] = useState('')

    const fetchComment = async () =>{
        const res = await fetch('/api/comments')
        const data = await res.json()
        console.log(data);
        setComments(data)
    }

    const submitComment = async () =>{
        const res = await fetch('/api/comments',{
            method:'POST',
            body:JSON.stringify({ name,item,comment }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await res.json()
    }

    const deleteComment = async (commentId) =>{
        const res = await fetch(`/api/comments?id=${commentId}`,{
            method:'DELETE'
        })
        const data = await res.json()
        fetchComment()
    }

    return ( 
        <>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/><br/>
        <button onClick={submitComment}>Submit Comment</button>
        <hr />
        <button onClick={fetchComment}>Show Comments</button>
        { comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    <h1>{comment.name}</h1>
                    <h2>{comment.item}</h2>
                    <p>{comment.comment}</p><button onClick={()=>deleteComment(comment.id)}>Delete</button>
                </div>
            )
        })
        }
        </>
     )
}
 
export default Comments;