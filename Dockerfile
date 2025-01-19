FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV=production
RUN npm install --legacy-peer-deps --omit=dev
COPY . .
RUN npm run build
RUN npm run build:seed

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
