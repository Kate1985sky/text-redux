A study project for practicing react-redux toolkit and react-router-dom.

## About this project

This project is about a product catalog that is launched when a user logs in to the site, using a feth request, you can add an item to the cart, delete, increase or decrease the number of products in the cart, empty the cart of goods, create a new product card, using the useMemo function I calculated quantity in cart and total cost.

There are 4 pages: a Bucket page, formNewItem, Login, Search.


## Tools and technologies

The whole project is built on react redux toolkit where I use fetch request to get data, using react-router-dom I can navigate and display components without reloading the page.
I use the :
1. useMemo hook to remember calculations that I will render every time my local state changes.

2. useNavigate hook allows you to programmatically navigate.

3. useSearchParams hook works for search part.

## What I've learned

In the project I've learned what is react-router and how to use it. I've learned new hooks:

useNavigate,
useSearchParams.

## How to work with the project

Clone this repository to your local machine Run the app in the development mode by npm start Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.