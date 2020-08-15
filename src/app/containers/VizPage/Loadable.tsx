/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const VizPage = lazyLoad(
  () => import('./index'),
  module => module.VizPage,
);
