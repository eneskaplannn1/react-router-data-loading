import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p></p>
      <button
        className="
        text-blue-500
        hover:text-blue-700
        hover:underline "
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
