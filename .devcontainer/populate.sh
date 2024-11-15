#!/bin/bash

MARKER_FILE="/workspace/.initialized"

if [ -f "$MARKER_FILE" ]; then
  echo "Already initialized"
  exit 0
fi

mongosh "mongodb://mongo:27017" -f ./mongo/schema/*.mongodb.js
redis-cli -h redis -p 6379 < ./redis/schema/productos.redis
touch "$MARKER_FILE"
