import Header from './components/header/Header';
import MenuSideBar from './components/menu-sidebar/MenuSidebar';
import LayoutContextProvider from './layout.context';
import LayoutWrapper from './Layout.wrapper';
import Toast from 'src/ui/toast/Toast';
import Style from './Layout.module.scss';
import { Suspense } from 'react';
import Loading from 'src/ui/loading/Loading';

const Layout = () => (
  <>
    <LayoutContextProvider>
      <main className={`${Style.main}`}>
        <div className={`${Style.menu}`}>
          <MenuSideBar />
        </div>
        <div className={`${Style.mainContent}`}>
          <div className={`${Style.header}`}>
            <Header />
          </div>
          <div className={`${Style.content}`}>
            <Suspense fallback={<Loading />}>
              <LayoutWrapper />
            </Suspense>
          </div>
        </div>
        <aside>
          <Toast />
        </aside>
      </main>
    </LayoutContextProvider>
  </>
);

export default Layout;
