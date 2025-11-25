# Stage 1: Build the React app
FROM node:20-slim AS build

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --force

# Copy all source code
COPY . .

# Build the app → output goes to /app/dist
RUN npm run build


# Stage 2: Serve the app
FROM node:20-slim

WORKDIR /app

RUN npm install -g serve

# Copy the build output from stage 1
COPY --from=build /app/dist ./dist

# Set host environment variable
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["serve", "-s", "dist", "--listen", "3000"]
