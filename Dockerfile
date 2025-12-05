FROM node:20 AS development-dependencies-env
WORKDIR /app
# Copy only package.json to avoid lockfile platform mismatch
COPY package.json ./
# Resolve dev deps on Debian so optional native packages match the platform
RUN npm install --include=dev

FROM node:20 AS build-env
WORKDIR /app
COPY . .
COPY --from=development-dependencies-env /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
# Copy only package.json to resolve runtime deps for musl/Alpine
COPY package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY --from=build-env /app/build ./build
CMD ["npm", "run", "start"]