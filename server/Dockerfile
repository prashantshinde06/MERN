FROM node:20-alpine AS server-builder

WORKDIR /app/server

# Install dependencies
COPY server/package*.json ./
RUN npm install --force

# Copy server source
COPY server/ ./


EXPOSE 4200
CMD ["npm","run" ,"dev"]