# Use slim Node 20 image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy all source code
COPY . .

# Set environment variables so the dev server listens on all interfaces
ENV HOST=0.0.0.0
ENV PORT=4200

# Expose container port
EXPOSE 4200

# Start the dev server
CMD ["npm", "run", "dev"]
