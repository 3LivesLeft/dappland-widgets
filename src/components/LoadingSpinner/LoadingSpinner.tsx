import { ReactElement } from 'react';

import Lottie from 'lottie-react';
import logo from '../Logo/logo-lottie.json';

export default function LoadingSpinner(): ReactElement {
  return <Lottie animationData={logo} />;
}
