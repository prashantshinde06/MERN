# Use  Node 20 image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy all source code
COPY . .

# Set environment variables for React dev server
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose port 3000 inside container
EXPOSE 3000

# Start React dev server
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
