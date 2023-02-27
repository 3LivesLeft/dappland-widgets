import { ReactElement } from 'react';

import Lottie from 'lottie-react';
import loadingAnimation from './dappland-icon-only.json';

export default function LoadingSpinner(): ReactElement {
  return <Lottie animationData={loadingAnimation} />;
}
