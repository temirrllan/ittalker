# 1) Базовый образ на Debian-slim
FROM node:20-slim AS base
WORKDIR /app

# 2) Устанавливаем зависимости
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# 3) Собираем билд
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max_old_space_size=3072"

# Здесь уже не должно OOM
RUN npm run build

# 4) Финальный раннер
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
