# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.0.7
FROM oven/bun:${BUN_VERSION} as base

LABEL fly_launch_runtime="Bun"

WORKDIR /app
COPY . .
RUN bun install

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "src/index.ts" ]