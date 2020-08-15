/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Widget = lazyLoad(
  () => import('./index'),
  module => module.Widget,
);
