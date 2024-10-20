const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://course-api.com/react-useReducer-cart-project',
    changeOrigin: true,
}));

app.listen(5000, () => {
    console.log('Proxy server running on port 5000');
});

