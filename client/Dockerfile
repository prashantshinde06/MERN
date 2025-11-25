# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Stage 2: Serve production build
FROM node:20-slim

WORKDIR /app

# Install static server
RUN npm install -g serve

# Copy build from previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Serve the build on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
