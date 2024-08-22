// A middleware in backend development is like a middleman that sits between the incoming request from a client and the final response from the server. It's a function that can modify the request, process it, handle certain tasks before passing it on the next part of the code or sending back a response

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
