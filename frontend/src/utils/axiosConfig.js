import axios from 'axios';

const baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost:7878/"
  : "http://example.com"

const app = axios.create({
    baseURL,
    withCredentials: true
})

/*
  The below is required if you want your API to return
  server message errors. Otherwise, you'll just get
  generic status errors.

  If you use the interceptor below, then make sure you
  return an err message from your express route:

  res.status(404).json({ err: "You are not authorized to do that." })
*/
app.interceptors.response.use(
  response => (response),
  error => ({
    message: error.response.data,
    status: error.response.status,
    error: error
  })
);

export default app;