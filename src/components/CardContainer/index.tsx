import React, { ReactNode } from "react";

interface CardContainerProps {
    className?: string;
    children: ReactNode;
    width?: string;
    bg?: string;
    height?: string;
    br?: string;
    pad?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
  }

const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
  width = "100%",
  bg = "#fff",
  height = "auto",
  br = "4px",
  pad = "20px",
  onClick,
  style,
}) => {
  return (
    <div
      className={`card-container ${className}`}
      style={{
        backgroundColor: bg,
        minHeight: height,
        width,
        borderRadius: br,
        padding: pad,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CardContainer;
