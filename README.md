## About issue tracker

This is a simple Full-stack App created with Next.js, Tailwind, Radix UI, MySQL and Prisma.

[Next.js](https://nextjs.org/) project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create MySQL database called: `issue_tracker`, and create a **.env** file where you will add:

```bash
DATABASE_URL="mysql://root:{yourPassword}@localhost:3306/issue_tracker"
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
