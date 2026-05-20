
# CORS kya hai simply:

Browser ek safety rule follow karta hai — agar frontend alag domain pe hai aur backend alag domain pe, toh browser by default request block kar deta hai. CORS is rule ko control karta hai.

# Simple Request vs Preflight:

## Simple request —
 GET ya POST with basic headers. Browser seedha bhejta hai.

## Preflight request — 
browser pehle ek OPTIONS request bhejta hai backend ko poochne ke liye "kya mujhe yeh request karne ki permission hai?" Backend haan bolta hai tab asli request jaati hai. Yeh tab hota hai jab custom headers, PUT, DELETE, ya JSON content-type ho.

# How CORS restriction actually  works ?

 # Simple GET —
  browser ne seedha request ki, server ne origin check kiya, match nahi hua, block kar diya. CORS error.

# Preflight PUT — 

OPTIONS request gayi, server ne 204 diya lekin Access-Control-Allow-Origin allowed origin nahi tha. Toh OPTIONS toh complete hua but actual PUT block ho gaya.

