This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Dependencies
- React: ^18
- Next.js: 14.1.0
- React Redux: ^9.1.0
- Material-UI (MUI): ^5.15.6
- Tailwind CSS: ^3.3.0

## Redux Implementation
This project utilizes Redux for state management. Here's a quick example of how Redux is implemented:

- Install Redux dependencies:
```
npm install @reduxjs/toolkit react-redux
```
- Implement Redux in your app, e.g., create a Redux store, actions, and reducers.

- In this application, I have implemented a feature where selecting a country updates the Redux store.

- To check the Redux implementation, follow these steps:
    1. Select a country on the homepage.
    2. Navigate to the "About Us" page using the sidebar navigation.
    3. Return to the homepage.
- You should observe that the selected country is maintained and retrieved from the Redux store, providing a seamless user experience.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
