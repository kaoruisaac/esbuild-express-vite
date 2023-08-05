FROM --platform=linux/amd64 node:16.15 AS builder

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM gcr.io/distroless/nodejs:16

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./
COPY --from=builder /app/dist ./dist

EXPOSE 9090

CMD ["dist/server"]
