This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

IMPORTANT: Retain sass-loader@10.1.1 as newer versions throw error for storybook
https://github.com/webpack-contrib/sass-loader/issues/923

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Google Cloud Deployment

First ensure you've Google Cloud SDK installed
Refer: https://cloud.google.com/sdk/docs/install

Post installation, you should have run gcloud init successfully

Once above done, follow below to deploy app

```bash
npm run deploy
# or
yarn deploy
```

Deployment output would have the URL to hit ,else you can run command

```bash
gcloud app browse
```

## Naming Conventions

Refer: https://github.com/airbnb/javascript/tree/master/react

Addl Rules:

1. All folders/files except React components are camelCased. React Component files are Pascal Cased

2. NextJS pages are small cased ( to match url naming pattern)
