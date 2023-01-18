const userList = ({users}) => {
    return ( 
        <>
        <h1>List of Users</h1>
        {users.map((user)=>{
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </>
     );
}
 
export default userList;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return{
        props : { users : data }
    }
}