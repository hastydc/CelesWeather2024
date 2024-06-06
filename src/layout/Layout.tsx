import Header from './components/header/Header';
import MenuSideBar from './components/menu-sidebar/MenuSidebar';
import LayoutContextProvider from './layout.context';
import LayoutWrapper from './Layout.wrapper';
import Style from './Layout.module.scss';
import { Suspense } from 'react';
import Loading from 'src/ui/loading/Loading';

/**
 * Layout component
 * @returns {Object} component
 */
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
      </main>
    </LayoutContextProvider>
  </>
);

export default Layout;
