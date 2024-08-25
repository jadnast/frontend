import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#0D0D0D',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
      ],
    },
    docs: {
      backgrounds: {
        default: 'black',
          values: [
            {
              name: 'black',
              value: '#0D0D0D',
            },
            {
              name: 'white',
              value: '#FFFFFF',
            },
          ],
      }
    }
  },
};

export default preview;
