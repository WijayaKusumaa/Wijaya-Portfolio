import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  style,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[#051A24] text-white btn-primary-shadow hover:opacity-90',
    secondary: 'bg-white text-[#051A24] btn-secondary-shadow hover:opacity-80',
    tertiary: 'bg-white text-[#051A24] btn-tertiary-shadow hover:opacity-80',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        style={style}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
