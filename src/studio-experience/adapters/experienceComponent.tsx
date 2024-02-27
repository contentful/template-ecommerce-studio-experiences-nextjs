import React from 'react';

export const experiencePropsAdapter =
  (Component: React.ComponentType<any>) =>
  ({ children, ...otherProps }: any) =>
    <Component {...otherProps}>{children}</Component>;

export const experienceControlAdapter =
  (Component: React.ComponentType<any>) =>
  ({ value, ...otherProps }) => {
    return <Component {...otherProps}>{value}</Component>;
  };
