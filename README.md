A study project for practicing react-redux toolkit and react-router-dom.

## About this project


This project is dedicated to a product catalog, which is launched when the user logs in to the site; during authorization, a comparison is made to ensure that the login and password are entered correctly, after which the user is taken to the site or must try again; using a selection request, you can add a product to the cart, delete it, increase or reduce the number of goods in the cart, create a new product card using the product function useMemo Calculated the number of carts and the cost.

There are 4 pages: cart pages, NewItem form, login, search.
Login and password for login:
name: admin
password: test


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
