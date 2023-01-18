const ArticleListByCategory = ({articles,category}) => {
    return ( 
        <>
        <h1>Showing news for category <span>{category}</span></h1>
        {
            articles.map((article)=>{
                return(
                    <div key={article.id}>
                        <h3>{article.id}. {article.title}</h3>
                        <p>{article.des}</p>
                    </div>
                )
            })
        }
        </>
     );
}
 
export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
    console.log(context);
    const { params } = context
    const { category } = params
    const res = await fetch(`http://localhost:3000/api/news?category=${category}`)
    const data = await res.json();
    return{
        props : { 
            articles : data,
            category,
         }
    }
}