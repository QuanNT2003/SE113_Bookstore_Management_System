// Layouts

// Pages
import Login from '~/pages/Login';
import ListProduct from '~/pages/ListProduct';
import AddProduct from '~/pages/AddProduct';
import InfoProduct from '~/pages/InfoProduct';

const publicRoutes = [
    { path: '/', component: Login, layout: null, title: 'Login' },
    { path: '/listproduct', component: ListProduct, title: 'Danh sách sản phẩm' },
    { path: '/addproduct', component: AddProduct, title: 'Quay lại' },
    { path: '/infoproduct/:id', component: InfoProduct, title: 'Quay lại' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
