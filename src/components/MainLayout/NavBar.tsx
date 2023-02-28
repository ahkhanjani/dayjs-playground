import { type Component, createSignal, For } from 'solid-js';
import { A, useLocation } from 'solid-start';
import classNames from 'classnames';

const navigation = [
  { name: 'String Format Test', href: '/' },
  { name: 'About', href: '/about' },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const NavBar: Component = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const location = useLocation();

  return (
    <nav class='bg-gray-800'>
      <div class='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div class='border-b border-gray-700'>
          <div class='flex h-16 items-center justify-between px-4 sm:px-0'>
            <div class='flex items-center'>
              <div class='hidden md:block'>
                <div class='ml-10 flex items-baseline space-x-4'>
                  <For each={navigation}>
                    {(item) => {
                      const current = item.href === location.pathname;
                      return (
                        <A
                          href={item.href}
                          class={classNames(
                            current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={current ? 'page' : undefined}
                        >
                          {item.name}
                        </A>
                      );
                    }}
                  </For>
                </div>
              </div>
            </div>

            <div class='-mr-2 flex md:hidden'>
              {/* mobile menu button */}
              <button
                type='button'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
                class='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span class='sr-only'>Open main menu</span>

                {mobileMenuOpen() ? <XMarkIcon /> : <Bars3Icon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen() && (
        <div class='border-b border-gray-700 md:hidden' id='mobile-menu'>
          <div class='space-y-1 px-2 py-3 sm:px-3'>
            <For each={userNavigation}>
              {(item) => (
                <A
                  href={item.href}
                  class='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                >
                  {item.name}
                </A>
              )}
            </For>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;

const XMarkIcon = () => (
  <svg
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='currentColor'
    aria-hidden='true'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

const Bars3Icon = () => (
  <svg
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke-width='1.5'
    stroke='currentColor'
    aria-hidden='true'
  >
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
    />
  </svg>
);
