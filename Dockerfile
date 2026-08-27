# Stage 1: Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN if [ -f package.json ]; then npm install && npm run build; else mkdir -p dist && echo '<html><body><h1>Sushi Bar Application</h1></body></html>' > dist/index.html; fi

# Stage 2: Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
