import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '../src/components/publiq-ui/ThemeProvider';
import i18n from '../src/i18n';
import '../src/styles/global.scss';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { CustomCanvas } from './CustomCanvas';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Primitives', 'Components'],
    },
  },
  docs: {
    components: {
      Canvas: CustomCanvas,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </ThemeProvider>
    </>
  ),
];
