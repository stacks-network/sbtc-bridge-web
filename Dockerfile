# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the environment variables
ENV PORT 8080

# Set the working directory to /app
WORKDIR /workspace

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application using Vite
RUN npm run build-mainnet && mv build mainnet
RUN npm run build-testnet && mv build testnet

# Expose port 8080
EXPOSE $PORT

# Start the Express server
CMD ["npm", "start"]
