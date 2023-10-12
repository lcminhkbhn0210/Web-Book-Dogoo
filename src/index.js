import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import HtmlBook from './components/HtmlBook';
import CssBook from './components/CssBook';
import JsBook from './components/JsBook';
import ReactBook from './components/ReactBook';
import NodeBook from './components/NodeBook';
import BookDetail from './components/BookDetail';

const router = createBrowserRouter([
  {path: "/",element: <App/>, children: [
    {index: true, element: <HtmlBook/>},
    {path: 'html', element: <HtmlBook/>},
    {path: 'css', element: <CssBook/>},
    {path: 'js', element: <JsBook/>},
    {path: 'react', element: <ReactBook/>},
    {path: 'node', element: <NodeBook/>},
    {path: 'books/:id', element: <BookDetail/>}
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
  </RouterProvider>
);

reportWebVitals();
