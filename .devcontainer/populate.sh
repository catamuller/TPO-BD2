mongosh "mongodb://mongo:27017" -f ./mongo/schema/*.mongodb.js
redis-cli -h redis -p 6379 < ./redis/schema/productos.redis
