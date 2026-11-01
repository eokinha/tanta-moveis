# Tanta Móveis

Catálogo mobile-first da Tanta Móveis (Next.js App Router + Tailwind CSS v4). Os pedidos são fechados pelo WhatsApp.

## Rodando

```bash
cp .env.example .env.local   # defina o número do WhatsApp e a URL do site
npm install
npm run dev
```

## Estrutura

- `src/data/catalog.ts` — categorias e produtos (fotos em `src/assets/catalog/`)
- `src/lib/whatsapp.ts` — links `wa.me` com mensagens prontas
- `src/app/page.tsx` — Home
- `src/app/categoria/[slug]` — lista por ambiente, com filtro por tipo
- `src/app/produto/[slug]` — detalhe do produto
- `src/components/` — header, footer, card de produto, botões do WhatsApp, ícones
