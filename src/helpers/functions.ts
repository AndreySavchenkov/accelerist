export const formatNumber = (data: string | number): any =>
  new Intl.NumberFormat('en-US').format(+data);
