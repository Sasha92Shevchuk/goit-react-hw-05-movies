import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main, Wrapper } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Main>{<Outlet />}</Main>
      </Suspense>

      <Footer />
    </Wrapper>
  );
};
