import react from 'react';
import * as addons from '@storybook/addons';
import * as coreEvents from '@storybook/core-events';
import { registerPreviewEntry } from './registerPreviewEntry.js';

export { react, coreEvents, addons, registerPreviewEntry };

export {
  storiesOf,
  setAddon,
  addDecorator,
  addParameters,
  configure,
  getStorybook,
  forceReRender,
  raw,
} from '@storybook/web-components';
