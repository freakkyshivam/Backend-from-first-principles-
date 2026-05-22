import http from "node:http";
import zlib from "node:zlib";

const body =
JSON.stringify(
  Array(100000).fill({
    name: "shivam",
    role: "developer"
  })
);

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, X-Encoding, Accept, Accept-Language",
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }

    if (req.url === "/data" && req.method === "GET") {
      const encoding = req.headers["x-encoding"];

      res.setHeader("Content-Type", "application/json");

      res.setHeader("Content-Encoding", encoding);

      if (encoding === "gzip") {
        const compressed = zlib.gzipSync(body);
        res.writeHead(200);
        return res.end(compressed);

      } else if (encoding === "br") {
        const compressed = zlib.brotliCompressSync(body);
        res.writeHead(200);

        return res.end(compressed);
      } else if (encoding === "zstd") {
        const compressed = zlib.zstdCompressSync(body);
        res.writeHead(200);

        return res.end(compressed);
      } else if (encoding === "deflate") {
        const compressed = zlib.deflateSync(body);
        res.writeHead(200);

       return res.end(compressed);
      } else {
        res.writeHead(200);

        return res.end(body);
      }
    }
  })
  .listen(3000, () => {
    console.log("Server listen at http://localhost:3000");
  });
