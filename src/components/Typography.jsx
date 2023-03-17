import React from "react";
import classnames from "classnames";

const Typography = ({as: Tag = 'div', children, variant, color, fontSize, fontWeight, gutterBottom, classes}) => {
    const variantMap = {
        "h1": "text-black text-xl md:text-2xl",
        "subtitle": "text-black text-sm md:text-base",
        "secondaryText": "text-textSecondary text-sm md:text-base",
        "primaryText": "text-textPrimary text-sm md:text-base",
    }
    return (
        <Tag className={
            classnames(variantMap[variant] || variantMap['primaryText'],
                {
                    [classes]: !!classes,
                    "mb-2": gutterBottom
                }
            )}
             style={{fontSize, fontWeight, color}}>
            {children}
        </Tag>
    )
}

export default Typography;