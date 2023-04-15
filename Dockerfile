# Use an official Node.js runtime as a parent image
FROM node:19-alpine

WORKDIR /build

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application using Vite
RUN npm run build
