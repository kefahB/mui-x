import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import composeClasses from '@mui/utils/composeClasses';
import { gridClasses, getDataGridUtilityClass } from '../../constants/gridClasses';

const useUtilityClasses = () => {
  const slots = {
    root: ['bottomContainer'],
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};

export type GridBottomContainerProps = React.PropsWithChildren;

const Element = styled('div')({
  position: 'sticky',
  zIndex: 40,
  bottom: 'calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))',
});

export function GridBottomContainer(props: GridBottomContainerProps) {
  const classes = useUtilityClasses();

  return (
    <Element
      {...props}
      className={clsx(classes.root, gridClasses['container--bottom'])}
      role="presentation"
    />
  );
}
