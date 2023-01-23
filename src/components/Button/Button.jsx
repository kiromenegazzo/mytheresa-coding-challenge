import PropTypes from 'prop-types';
import React from 'react';

import cn from 'classnames';

export const Button = (props) => {
  const { children, variant = 'primary', onClick } = props;

  return (
    <button className={cn('button', `button--${variant}`)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'alternate']),
  onClick: PropTypes.func,
};
