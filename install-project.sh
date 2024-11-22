#!/bin/bash

echo "Installing backend dependencies..."
cd backend
yarn install

echo "Installing frontend dependencies..."
cd ../frontend
yarn install

echo "Dependencies installed successfully!"
