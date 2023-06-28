import { useState } from "react";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./UserSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(userActions.updateName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* {username ? (
        <Button>
          <NavLink>Continue Ordering {username}</NavLink>
        </Button>
      ) : (
        <></>
      )} */}
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 mb-8 border rounded-full border-stone-400 focus:ring-offset-yellow-400 w-72"
      />

      {username !== "" && (
        <div>
          <Button>
            <NavLink to="menu">Start Ordering</NavLink>
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
