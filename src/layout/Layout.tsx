import LayoutContextProvider from './layout.context';
import LayoutWrapper from './Layout.wrapper';
import Toast from 'src/ui/toast/Toast';

const Layout = () => (
  <>
    <LayoutContextProvider>
      <main>
        <LayoutWrapper />
        <Toast />
      </main>
    </LayoutContextProvider>
  </>
);

export default Layout;
