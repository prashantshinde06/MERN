# Stage 2: Serve
FROM node:20-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

# Set host environment variable
ENV HOST=0.0.0.0

EXPOSE 3000

# Serve with only port
CMD ["serve", "-s", "dist", "-l", "3000"]
