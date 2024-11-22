#!/bin/bash

echo "Starting Backend..."
cd backend
yarn dev &
BACKEND_PID=$!

echo "Starting Frontend..."
cd ../frontend
yarn start &
FRONTEND_PID=$!

echo "Project is running. Press CTRL+C to stop."

wait $BACKEND_PID $FRONTEND_PID
