import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'client/components/MainLayout';

const routes = createBrowserRouter([{
  path: '/',
  Component: MainLayout,
  children: [],
}]);

export default routes;
