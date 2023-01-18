import Link from "next/link";

const PostList = ({posts}) => {
    return ( 
        <>
        <h1>List of Posts</h1>
        {
            posts.map((post)=>{
                return(
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}><h2>{post.id} {post.title}</h2></Link>
                    </div>
                )
            })
        }
        </>
     );
}
 
export default PostList;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    return{
        props : { posts : data.slice(0,3) }
    }
}