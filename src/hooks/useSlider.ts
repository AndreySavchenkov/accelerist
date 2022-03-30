import React, { useCallback } from 'react';

type UseSliderT = [
  value: number[],
  handler: (event: Event, newValue: number | number[]) => void,
];

export const useSlider = (min: number, max: number): UseSliderT => {
  const [value, setValue] = React.useState<number[]>([min, max]);

  const handler = useCallback((event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  }, []);

  return [value, handler];
};
