# HTTP Caching kya hai simply :
    Browser ya server response ko save kar leta hai taaki baar baar same request na bhejni pade. Performance improve hoti hai, server load kam hota hai.

## 3 main headers jo matter karte hain:

### 1. Cache-Control — 
    server batata hai ki response kitne time tak cache karo.

```js
Cache-Control: max-age=3600  // 1 ghante tak cache karo
Cache-Control: no-cache      // cache mat karo
Cache-Control: no-store      // kabhi store mat karo
```

### 2. ETag — 
 server response ka ek unique fingerprint deta hai. Browser next request mein yeh bhejta hai. Agar same hai toh server 304 Not Modified bhejta hai — matlab data wahi hai, dobara mat bhejo

 ### 3. Last-Modified — 
 server batata hai response kab last change hua.