# Paisaje Commerce

A full-stack e-commerce platform for selling digital products and courses, built with Next.js, Supabase, and Mercado Pago. Developed and deployed in 2 weeks as a freelance project for a real client.

🔗 **Live demo:** [paisaje-commerce.vercel.app](https://paisaje-commerce.vercel.app)

---

## Features

### For customers
- User authentication via **Google OAuth** and **email/password**
- Browse and purchase digital products and online courses
- Secure checkout powered by **Mercado Pago** payment gateway
- Instant access to purchased content (files, videos, documents)

### For the store owner
- Private admin login with role-based access control
- Full product management: create, edit, and delete listings
- Upload support for **images, videos, and downloadable files**
- Dashboard to manage the product catalog

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes (serverless) |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (Google OAuth + email) |
| Storage | Supabase Storage (images, videos, files) |
| Payments | Mercado Pago Checkout API |
| Hosting | Vercel |

---

## Architecture highlights

- **Serverless API routes** via Next.js for all backend logic
- **Row Level Security (RLS)** in Supabase to protect user and product data
- **Role-based access**: admin routes protected server-side, customer routes client-side
- **Supabase Storage** for scalable file delivery with signed URLs
- **Mercado Pago webhooks** for async payment confirmation

---

## Getting started

```bash
git clone https://github.com/somosescaladigital/paisaje-commerce
cd paisaje-commerce
npm install
```

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
MERCADOPAGO_ACCESS_TOKEN=your_mp_access_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Run the database migrations:

```bash
# Apply migrations from migrations.sql in your Supabase project
```

---

## Project context

Built as a freelance project under [Escala Digital](https://escaladigital.com.ar), a web agency focused on delivering digital solutions for small and medium businesses in Argentina.

---

## Author

**Conrado Llanos** — Full Stack Developer  
[conradollanos.dev](https://conradollanos.dev) · [LinkedIn](https://linkedin.com/in/conrado-ok) · [GitHub](https://github.com/ConradoFrancisco)
