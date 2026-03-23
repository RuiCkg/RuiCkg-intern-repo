import { useState } from "react";
import axiosInstance from "./api/axiosInstance";

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostRequest = async () => {
    setLoading(true);
    setError("");
    setResponseData(null);

    const controller = new AbortController();

    try {
      const response = await axiosInstance.post(
        "/posts",
        {
          title: "Hello from Rui",
          body: "This is a test POST request using Axios.",
          userId: 1,
        },
        {
          signal: controller.signal,
        }
      );

      setResponseData(response.data);
    } catch (err) {
      if (err.code === "ECONNABORTED") {
        setError("Request timed out.");
      } else if (err.name === "CanceledError") {
        setError("Request was cancelled.");
      } else {
        setError("Failed to make API request.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }

    // Example cancellation usage:
    // controller.abort();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Axios API Practice</h1>
      <button onClick={handlePostRequest} disabled={loading}>
        {loading ? "Sending..." : "Send POST Request"}
      </button>

      {error && <p>{error}</p>}

      {responseData && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;