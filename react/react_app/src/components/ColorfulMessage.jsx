import React from "react";

export const ColorfulMessage = (props) => {
    // 分割代入でコードを簡潔にする
    const {color, children} = props;
    const contentStyle = {
        color,
        fontSize: '18px'
    }
    return (
        <p style={contentStyle}>{children}</p>
    )
}
