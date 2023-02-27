import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main, Wrapper } from './Layout.styled';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>{<Outlet />}</Main>
      </Suspense>
      <ToastContainer autoClose={3000} />
      <Footer />
    </Wrapper>
  );
};
