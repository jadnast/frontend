import { addons } from '@storybook/manager-api';
import theme from './theme.ts'; // Ensure the casing matches the actual file name
 
addons.setConfig({
  theme: theme,
});