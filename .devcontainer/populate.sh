mongosh -u "mongodb://mongo:27017" -f /workspace/mongo/schema/*.mongodb.js
redis-cli -h redis -p 6379 < /workspace/redis/schema/productos.schema
