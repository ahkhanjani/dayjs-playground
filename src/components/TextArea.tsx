import { type Component } from 'solid-js';

const TextArea: Component<{ label: string }> = (props) => {
  return (
    <div class='flex items-start space-x-4'>
      <div class='min-w-0 flex-1'>
        <form action='#' class='relative'>
          <div class='overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'>
            <label for='comment' class='sr-only'>
              {props.label}
            </label>
            <textarea
              rows='3'
              name='comment'
              id='comment'
              class='block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm'
              placeholder={props.label}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default TextArea;
