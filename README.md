# Clínica Naturalize

Website para a Clínica Naturalize, desenvolvido com Next.js, Material UI e Framer Motion.

## Tecnologias

- Next.js 15.3.2 (App Router)
- React 19.1.0
- Material UI 6.0.0
- Framer Motion 12.12.1 (carregamento dinâmico)
- TypeScript 5.8.3
- Lucide Icons
- Zod (validação de formulários)

## Funcionalidades

- Landing page com design elegante e minimalista
- Layout responsivo
- Animações suaves com Framer Motion (carregado apenas no cliente)
- Formulário de contato com Server Actions
- Arquitetura de React Server Components
- Compatível com SEO

## Novos CTAs e motivos

Para aumentar as taxas de conversão sem comprometer o design minimalista, adicionamos CTAs estratégicos:

1. **Hero com botão secundário**
   - Permite que visitantes explorem serviços antes de agendar, reduzindo fricção
   - Scroll suave mantém o usuário engajado sem sair da página

2. **Botões nos cards de serviços**
   - CTAs específicos por tipo de tratamento aumentam relevância
   - Diálogo de estética mostra benefícios visuais imediatos
   - Ação de WhatsApp encurta o caminho para conversão em implantes

3. **Link no About**
   - Aproveita o momento de conexão emocional após leitura da missão
   - WhatsApp oferece contato imediato e informal

4. **Botão em Testimonials**
   - Capitaliza na prova social com chamada para resultados
   - Cria expectativa para expansão futura do site

5. **CTA flutuante mobile**
   - Garante que a ação principal (agendar) esteja sempre visível
   - Específico para experiência mobile sem poluir desktop

Todos os CTAs mantêm a estética minimalista com:
- Transições suaves (≤ 400ms)
- Contraste adequado para acessibilidade
- Carregamento dinâmico para não afetar performance
- Conformidade com separação server/client

## Arquitetura

Este projeto utiliza uma arquitetura moderna baseada em React Server Components, separando claramente componentes de servidor e cliente:

### Server Components
Os componentes de servidor são renderizados no servidor e enviados ao cliente como HTML. Eles não carregam JavaScript desnecessário e melhoram o desempenho.
- `layout.tsx`
- `Hero.tsx`
- `Services.tsx`
- `About.tsx`
- `Footer.tsx`

### Client Components
Componentes que precisam de interatividade, estado ou efeitos do navegador são marcados com `"use client"` e carregados no cliente.
- `ClientProviders.tsx` (para ThemeProvider)
- `ClientServiceItem.tsx` (para animações)
- `ClientHeroAnimation.tsx` (para animações)
- `ContactForm.tsx` (formulário interativo)
- `Testimonials.tsx` (carrossel)
- `cta/EsteticaDialog.tsx` (diálogo de tratamentos estéticos)
- `cta/StickyMobileCTA.tsx` (CTA flutuante para mobile)

### Server Actions
As ações do formulário são processadas no servidor usando React Server Actions:
- `src/app/contact/actions.ts`

## Estrutura do Projeto

- `/src/app`: Roteamento e layout principal
- `/src/components`: Componentes modulares
- `/src/components/cta`: Componentes de Call-to-Action
- `/src/theme.ts`: Configuração de tema e cores com CSS Variables
- `/src/app/contact/actions.ts`: Server Action para processamento de formulário

## Paleta de Cores

- Navy principal: #0f1a33
- Navy escuro: #0b1429
- Dourado: #d1b78f
- Sombra dourada: #8c7353

## Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Construir para produção
npm run build

# Executar build de produção
npm start

# Verificar regras ESLint (inclui regras específicas para Next.js)
npm run lint
```

Acesse `http://localhost:3000` para visualizar o site.

## Deploy

Este projeto está configurado para deploy na Vercel. Conecte o repositório à sua conta Vercel para deploy automático a cada push.

## Licença

Todos os direitos reservados © Clínica Naturalize 