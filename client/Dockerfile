FROM node:20-alpine AS client-builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
