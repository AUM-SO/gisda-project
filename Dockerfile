# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN npm install -g serve

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

COPY ./src ./src
COPY ./font ./font
COPY ./public ./public

# RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 bloggroup
RUN adduser --system --uid 1001 bloguser

COPY ./build ./build
# COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

RUN npm install -g serve

USER bloguser

EXPOSE 4000

ENV PORT 4000

CMD ["node", "serve -s build -l 4000"]