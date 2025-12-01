import app from "./server.js";

export default function handler(req, res) {
  const port = process.env.PORT || 3000;

  const server = app.listen(port, () => {
    app.emit("request", req, res);
  });
}

