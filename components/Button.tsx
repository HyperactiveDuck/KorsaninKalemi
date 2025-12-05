import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'light';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-crimson border-crimson text-softpearl hover:bg-redcarriage hover:border-redcarriage",
    outline: "bg-transparent border-softpearl text-softpearl hover:bg-softpearl hover:text-obsidian",
    light: "bg-obsidian border-obsidian text-softpearl hover:bg-crimson hover:border-crimson hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;