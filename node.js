// api/your-route.js

export default function handler(req, res) {
  fetch("https://ecommerce-codebook.vercel.app/")
    .then((response) => response.json())
    .then((data) => {
      res.setHeader("Access-Control-Allow-Private-Network", "true");
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    });

  res.setHeader("Access-Control-Allow-Private-Network", "true");
  res.json({ message: "Hello, world!" });
}
