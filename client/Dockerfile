FROM node:20-alpine AS client-builder

WORKDIR /app/client

# Install dependencies
COPY client/package*.json ./
RUN npm install --force

# Copy client source
COPY client/ ./

EXPOSE 3000
# CMD ["npm","run" ,"start"]   # start React app
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]