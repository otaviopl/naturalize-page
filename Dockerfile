# ---------- 1️⃣ Dependências ----------
    FROM node:18-alpine AS deps
    WORKDIR /app
    
    # Copie SOMENTE os arquivos de dependências;
    # assim, mudanças em código não invalidam esta camada.
    COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
    RUN npm ci --legacy-peer-deps
    
    # ---------- 2️⃣ Build ----------
    FROM node:18-alpine AS builder
    WORKDIR /app

    
    # Trazer os módulos prontos
    COPY --from=deps /app/node_modules ./node_modules
    
    # Copiar o resto do projeto
    COPY . .
    
    # Compila para produção
    RUN npm run build
    
    # ---------- 3️⃣ Runner ----------
    FROM node:18-alpine AS runner
    WORKDIR /app
    
    ENV NODE_ENV=production \
        # desliga a telemetria da Vercel
        NEXT_TELEMETRY_DISABLED=1
    
    # Copiar apenas artefatos necessários
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/package.json ./package.json
    
    EXPOSE 3000
    
    # O healthcheck do Traefik usa /api/healthcheck (já exposto pelo Next)
    CMD ["node_modules/.bin/next", "start", "-p", "3000"]
    