import { type Component } from 'solid-js';
import dayjs from 'dayjs';

import MainLayout from '~/components/MainLayout';
import TextArea from '~/components/TextArea';

const EXAMPLE_FORMAT = 'M/D/YYYY' as const;

const HomePage: Component = () => {
  return (
    <MainLayout pageTitle='String Format Test'>
      <div class='h-52 rounded-md bg-white shadow-md'>
        <div class='grid grid-cols-2 gap-6 px-10 pt-7 md:gap-14'>
          <div class='col-span-2 md:col-span-1'>
            <TextArea
              label={`Your date string (e.g. ${dayjs().format(
                EXAMPLE_FORMAT
              )})`}
            />
          </div>
          <div class='col-span-2 md:col-span-1'>
            <TextArea label={`Your format template (e.g. ${EXAMPLE_FORMAT})`} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default HomePage;
