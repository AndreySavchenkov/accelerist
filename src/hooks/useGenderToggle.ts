import { useCallback, useState } from 'react';

type UseGenderToggleT = {
  isMale: boolean;
  isFemale: boolean;
  isBoth: boolean;
  onGenderClick: (name: string) => void;
  showGenderResult: () => void;
};

export const useGenderToggle = (): UseGenderToggleT => {
  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
  const [isBoth, setIsBoth] = useState(false);

  const onGenderClick = useCallback((name: string): void => {
    if (name === 'male') {
      setIsMale(true);
      setIsFemale(false);
      setIsBoth(false);
    }
    if (name === 'female') {
      setIsMale(false);
      setIsFemale(true);
      setIsBoth(false);
    }
    if (name === 'both') {
      setIsMale(false);
      setIsFemale(false);
      setIsBoth(true);
    }
  }, []);

  const showGenderResult = useCallback((): string => {
    if (isMale) {
      return 'male';
    }
    if (isFemale) {
      return 'female';
    }

    return 'both';
  }, [isMale, isFemale]);

  return { isMale, isFemale, isBoth, onGenderClick, showGenderResult };
};
