import React, { FC, memo } from '../../lib/teact/teact';
import { OwnProps } from './SeenByModal';
import { Bundles } from '../../util/moduleLoader';

import useModuleLoader from '../../hooks/useModuleLoader';

const SeenByModalAsync: FC<OwnProps> = (props) => {
  const { isOpen } = props;
  const SeenByModal = useModuleLoader(Bundles.Extra, 'SeenByModal', !isOpen);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return SeenByModal ? <SeenByModal {...props} /> : undefined;
};

export default memo(SeenByModalAsync);
