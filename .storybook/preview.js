import { withThemesProvider } from "themeprovider-storybook";

const theme1 = {
  primary: '#627ED9',
  secondary: '#fcbe13',
  borderRadius: '5px',
}

const theme2 = {
  primary: '#127ED9',
  secondary: '#0cbe13',
  borderRadius: '15px',
}


// Options:
const themes = [
  {
    name: 'Theme1',
    backgroundColor: '#fff', 
    ...theme1,
  },
  {
    name: 'Theme2',
    backgroundColor: '#000',
    ...theme2,
  }
]

export const decorators = [
  withThemesProvider(themes)
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}