
Multipart ka matlab sirf large files nahi hai. Jab bhi form mein multiple types ka data hota hai ek saath — jaise ek field mein text aur ek field mein file — tab browser multipart format use karta hai.

## Example:
    Profile update form — naam bhi bhej raha hai aur profile photo bhi. Yeh dono alag types hain. Browser inhe ek request mein multipart format mein pack karta hai.

## Multipart request kaisi dikhti hai internally:

```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

------WebKitFormBoundary
Content-Disposition: form-data; name="username"

Shivam
------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="photo.jpg"
Content-Type: image/jpeg

[binary file data]
------WebKitFormBoundary--
```

Har part ka apna header hota hai. boundary ek separator hai jo parts ko alag karta hai.