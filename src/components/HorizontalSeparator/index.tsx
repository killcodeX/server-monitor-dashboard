import React from "react";

type PropsType = {
  label?: string;
};

export default function HorizontalSeparator(props: PropsType) {
  if (props.label) {
    return <div className="horizontal-separator-with-label">{props.label}</div>;
  }

  return <div className="horizontal-separator" />;
}
