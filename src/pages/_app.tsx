import '@app/styles/tailwind.css';
import '@app/styles/custom.css';
import { appWithTranslation } from 'next-i18next';

import App from '@app/providers';
export default appWithTranslation(App);