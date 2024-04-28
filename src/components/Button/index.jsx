import React from "react";
import cx from "clsx";
import styles from "./index.module.scss";

const Button = props => {
  const { text, variant, fontSize, fontWeight, iconLeft, iconRight, ...rest } = props;
  const buttonStyles = {
    primary: `${styles.btnPrimary}`,
    secondary: `${styles.btnSecondary}`,
    primaryGradient: `${styles.btnPrimaryGradient}`,
  };

  const buttonFontSizes = {
    font12: `${styles.font12}`,
    font14: `${styles.font14}`,
  };

  const buttonFontWeight = {
    regular: `${styles.regular}`,
    medium: `${styles.medium}`,
    bold: `${styles.bold}`,
  };

  return (
    <button
      className={cx(
        styles.btn,
        buttonStyles[variant],
        buttonFontSizes[fontSize],
        buttonFontWeight[fontWeight],
        "flex align-items-center gap-6"
      )}
      {...rest}
    >
      {iconLeft && iconLeft}
      {text && text}
      {iconRight && iconRight}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  variant: "primary",
  fontSize: "font12",
  fontWeight: "regular",
};

export default Button;
