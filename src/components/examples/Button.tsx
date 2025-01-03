import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
                                                  variant = 'primary',
                                                  size = 'medium',
                                                  disabled = false,
                                                  children,
                                                  onClick
                                              }) => {
    // 버튼 스타일 매핑
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
    };

    const sizeStyles = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2',
        large: 'px-6 py-3 text-lg'
    };

    const baseStyles = "rounded-md font-medium transition-colors duration-200";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};