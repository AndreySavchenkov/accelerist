import { useState } from 'react';

type UseShowPasswordT = {
  isShowPassword: boolean;
  onShowPasswordClick: () => void;
};

export const useShowPassword = (): UseShowPasswordT => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const onShowPasswordClick = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  return { isShowPassword, onShowPasswordClick };
};
