import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, NavigationLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>Copyright &copy; 2023 GoIT. Created by Rimma Ohanesian.</footer>
    </Container>
  );
};

export default Layout;
