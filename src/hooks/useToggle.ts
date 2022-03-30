import { useCallback, useState } from 'react';

export type useToggleT = [
  isFirst: boolean,
  isSecond: boolean,
  onToggleItemClick: () => void,
];

export const useToggle = (): useToggleT => {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);

  const onToggleItemClick = useCallback((): void => {
    setIsFirst(!isFirst);
    setIsSecond(!isSecond);
  }, [isFirst, isSecond]);

  return [isFirst, isSecond, onToggleItemClick];
};
