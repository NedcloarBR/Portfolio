# Etapa 1: Dependências
FROM node:20.9.0-alpine AS deps

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn/

RUN yarn install --immutable

FROM node:20.9.0-alpine AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

FROM node:20.9.0-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]
