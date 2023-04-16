import Link from 'next/link';
import React from 'react';
import { LinkArrow } from './Icons';

const variants = {
  primary:
    'bg-dark text-light border-dark dark:border-light hover:bg-light hover:text-dark hover:border-dark dark:hover:border-light',
  secondary:
    'bg-light text-dark border-dark dark:border-light hover:bg-dark hover:text-light hover:border-dark',
  tertiary:
    'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-transparent text-primary border-none',
};

const Button = ({
  text,
  href,
  variant = 'primary',
  icon = undefined,
  className = '',
}) => {
  const selectedVariant = variants[variant];

  return (
    <Link
      href={href}
      target={'_blank'}
      className={`flex items-center p-2.5 px-6 rounded-lg text-xl font-semibold border-2 border-solid
       sm:text-lg sm:p-1.5 sm:px-3 ${className} ${selectedVariant}`}
    >
      {text} {icon}
    </Link>
  );
};

export default Button;
