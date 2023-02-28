import { type Component } from 'solid-js';

const Header: Component<{ pageTitle: string }> = (props) => {
  return (
    <header class='py-10'>
      <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h1 class='text-3xl font-bold tracking-tight text-white'>
          {props.pageTitle}
        </h1>
      </div>
    </header>
  );
};
export default Header;
