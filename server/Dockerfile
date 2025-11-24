FROM node:20-alpine AS server-builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 4200

CMD ["npm", "run", "dev"]
