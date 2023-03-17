import React from "react";
import classnames from 'classnames';

const Button = ({variant, size, colour, textColor, classes, children}) => {
    const bgColour = variant === 'outlined' ? 'transparent' : colour;
    const textColour = variant === 'outlined' ? textColor || colour : textColor;
    return (
        <button className={
            classnames(
                `border border-${colour} bg-${bgColour} text-${textColour} font-bold py-2 px-4 rounded rounded-md ${classes}`,
                {
                    "text-xs": size === 'sm',
                    "text-xl": size === 'lg'
                }
            )
        }>
            {children}
        </button>
    )
}

export default Button;