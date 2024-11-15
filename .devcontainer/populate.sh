#!/bin/bash

MARKER_FILE=".initialized"

if [ -f "$MARKER_FILE" ]; then
  echo "Already initialized"
  exit 0
fi

mongosh "mongodb://mongo:27017" -f ./mongo/schema/*.mongodb.js
redis-cli -h redis -p 6379 < ./redis/schema/productos.redis

echo "Delete me if you want to rerun the schema files on the devcontainer" > "$MARKER_FILE"
