import {useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
    const { users, loading, fetchUsers } = useContext(GithubContext)
  
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8">
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  } else {
    return (
        // <h1>Loading...</h1>
        <Spinner/>
    )
  }
}

export default UserResults;
