# What is this?

This is an attempt at implementing a front-end interface using nextjs and react for the Lezzoo task. The API used is from the Lezzoo-task-backend

## What can it do now?

For now, it has a registration and a login page as well as a home page where the user can view created stores. The home page is optimized as every time a user changes a page using the pagination component a request to grab 4 stores is made.

All received data is stored using Redux

## Missing features

Due to the time constraint, the current features are very limited. However, adding CRUD functionality should be easy as most of the "hard" parts have been done here like authentication and efficient data handling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.
