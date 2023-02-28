import { type ParentComponent } from 'solid-js';
import Header from './Header';
import NavBar from './NavBar';

const MainLayout: ParentComponent<{ pageTitle: string }> = (props) => {
  return (
    <div class='min-h-full'>
      <div class='bg-gray-800 pb-32'>
        <NavBar />
        <Header pageTitle={props.pageTitle} />
      </div>
      <main class='-mt-32'>
        <div class='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
          {props.children}
        </div>
      </main>
    </div>
  );
};
export default MainLayout;
