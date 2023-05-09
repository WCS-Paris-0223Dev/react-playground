

function Users() {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  console.log(users)
  return (
    <div  style={{ display: 'flex', flexDirection: "column", }}>
      {
        users.map(user => (
          <div key={user.id} >
            <p> {user.name} - {user.email} </p>
            <h2> {user.company.name} </h2>
            <p> {user.phone} </p>
            <p> {user.website} </p>
            <hr />
          </div>
        ))
      }
    </div>
  )
  
}
  
  ReactDOM.render(
    <Users />,
    document.querySelector('#app')
  );