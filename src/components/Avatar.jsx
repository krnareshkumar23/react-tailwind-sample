import React from "react";
import classnames from "classnames";

const Avatar = ({imgSrc, size = 48, title, variant, classes}) => {

    return (
        <div
            className={
                classnames(
                    "flex-none bg-cover bg-no-repeat bg-center text-center overflow-hidden",
                    {
                        "rounded": variant === "rounded",
                        "circular": variant === "circular",
                        [classes]: !!classes
                    }
                )
            }
            style={{backgroundImage: `url('${imgSrc}')`, width: size, height: size}}
            title={title}
        />
    )
}

export default Avatar;