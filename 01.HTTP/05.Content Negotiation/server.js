import { log } from "node:console";
import http from "node:http";

const messages = {
  hi: "नमस्ते! सर्वर सफलतापूर्वक हिंदी में response भेज रहा है।",

  en: "Hello! The server is successfully sending a response in English.",

  ja: "こんにちは！サーバーは正常に日本語でレスポンスを送信しています。",
};

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
      const accept = req.headers["accept"];
      const lang = req.headers["accept-language"];
      const encoding = req.headers["x-encoding"];

      const msg = messages[lang] || messages.en;

      res.setHeader("X-Encoding", encoding);
      let body;
      let type;

      if (accept.includes("application/json")) {
        type = "application/json";

        body = JSON.stringify(
          {
            msg,
            lang,
            accept,
            encoding,
          },
          null,
          2,
        );
      } else if (accept.includes("application/xml")) {
        type = "application/xml";

        body = `
    <response>
      <message>${msg}</message>
      <language>${lang}</language>
      <accept>${accept}</accept>
      <encoding>${encoding}</encoding>
    </response>
  `;
      } else if (accept.includes("text/html")) {
        type = "text/html";

        body = `
    <div>
      <h1>${msg}</h1>
      <p><b>Language:</b> ${lang}</p>
      <p><b>Accept:</b> ${accept}</p>
      <p><b>Encoding:</b> ${encoding}</p>
    </div>
  `;
      } else {
        type = "text/plain";

        body = `
            Message: ${msg}
            Language: ${lang}
            Accept: ${accept}
            Encoding: ${encoding}
  `;
      }

      res.writeHead(200, {
        "Content-Type": type,
      });

      res.end(body);
    }
  })
  .listen(3000, () => {
    console.log("Server listen at http://localhost:3000");
  });
