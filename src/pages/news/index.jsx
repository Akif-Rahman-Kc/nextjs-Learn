import Link from "next/link";

const ArticleList = ({ articles }) => {
    return ( 
        <>
        <h1>List of News Articles</h1>
        {
            articles.map((article)=>{
                return(
                   <div key={article.id}>
                         <Link href={`/news/${article.category}`}><h4>{article.id}.{article.title} | {article.category}</h4></Link>
                    </div>
                )
            })
        }
        </>
     );
}
 
export default ArticleList;

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/news')
    const data = await res.json();

    return{
        props : { articles : data }
    }
}