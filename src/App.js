import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 사용자 관련
import { Main } from './components/Main';
import { Join2 } from './pages/Join2';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { PaymentPage } from './pages/PaymentPage';
import { OrderCompletePage } from './pages/OrderCompletePage';
import { ManageAccount2 } from './pages/ManageAccount2';
import { AdminPage } from './pages/AdminPage';
import { AdminMemberPage } from './pages/AdminMemberPage';
import { AdminProductPage } from './pages/AdminProductPage';
import { AdminCategoryPage } from './pages/AdminCategoryPage';
import { AdminOrderPage } from './pages/AdminOrderPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { LeavePage } from './pages/LeavePage';
import { PersonalOrderPage } from './pages/PersonalOrderPage';
import { CategoryPage } from './pages/CategoryPage';
import { Nav } from './components/Nav';

// 상품 관련
import { ProductDetailPage } from './pages/ProductDetailPage';

// 기타
import { NotFound } from './pages/NotFound';
import { Repositories, RepositoryNames } from './repository';

import GlobalStyle from './style/GlobalStyle';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { userToken } = localStorage;
  const userRepository = Repositories[RepositoryNames.USER];

  useEffect(() => {
    userRepository
      .getProfile(localStorage.getItem('userToken'))
      .then((data) => {
        localStorage.setItem('userName', data.name);
        localStorage.setItem('userId', data.id);
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userPhoneNumber', data.phoneNumber);
        localStorage.setItem('userAddress', data.address);
        localStorage.setItem('userRoles', data.roles);
        if (userToken === 'undefined' || !userToken) {
          console.log('isLogin ? : ', isLogin);
        } else {
          setIsLogin(true);
          console.log('isLogin ? : ', isLogin);
          if (localStorage.userRoles === 'Admin') {
            setIsAdmin(true);
            console.log('isAdmin ? : ', isAdmin);
          }
        }
      })
      .catch();
  }, []);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  // 카테고리 조회
  const categoryRepository = Repositories[RepositoryNames.CATEGORY];
  useEffect(() => {
    categoryRepository
      .getAllCategories()
      .then((res) => {
        // console.log(res);
        setCategory(res);
      })
      .catch();
  }, []);

  const [cart, setCart] = useState([]);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 상단 네비게이션 바 라우팅 */}
          <Route
            path="/"
            element={
              <Nav
                cart={cart}
                setCart={setCart}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                isAdmin={isAdmin}
              />
            }
          >
            <Route
              index
              element={
                <Main
                  product={product}
                  setProduct={setProduct}
                  category={category}
                  setCategory={setCategory}
                />
              }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="join" element={<Join2 />} />
            <Route
              path="cart"
              element={
                <CartPage cart={cart} setCart={setCart} isLogin={isLogin} />
              }
            />
            <Route path="cart/payment" element={<PaymentPage cart={cart} />} />
            <Route path="cart/orderComplete" element={<OrderCompletePage />} />
            <Route path="manageAccount" element={<ManageAccount2 />} />
            <Route path="manageAccount/leave" element={<LeavePage />} />
            <Route path="manageAccount/order" element={<PersonalOrderPage />} />
            <Route path="manageAccount/userInfo" element={<UserInfoPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/member" element={<AdminMemberPage />} />
            <Route path="admin/product" element={<AdminProductPage />} />
            <Route path="admin/category" element={<AdminCategoryPage />} />
            <Route path="admin/order" element={<AdminOrderPage />} />

            {/* 카테고리별 상품목록 라우팅 */}
            <Route
              path="category/:catId"
              element={
                <CategoryPage
                  product={product}
                  setProduct={setProduct}
                  category={category}
                  setCategory={setCategory}
                />
              }
            />

            {/* 상품 상세 라우팅 */}
            <Route
              path="category/:catId/:prodId"
              element={
                <ProductDetailPage
                  cart={cart}
                  setCart={setCart}
                  category={category}
                  product={product}
                  setProduct={setProduct}
                />
              }
            />
          </Route>
          {/* Not Found 라우팅 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
