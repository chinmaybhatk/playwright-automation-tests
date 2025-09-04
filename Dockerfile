FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Ensure browsers are installed
RUN npx playwright install --with-deps

# Default command
CMD ["npx", "playwright", "test"]