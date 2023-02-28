import { type Component } from 'solid-js';
import MainLayout from '~/components/MainLayout';

const HomePage: Component = () => {
  return (
    <MainLayout pageTitle='String Format Test'>
      <div class='h-52 rounded-md bg-white shadow-md' />
    </MainLayout>
  );
};
export default HomePage;
