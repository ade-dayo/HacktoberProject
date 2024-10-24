import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// ShortInputWithPlaceholder Component
export const ShortInputWithPlaceholder = forwardRef(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base",
      color = "gray-500",
      weight = "font-normal",
      lineHeight = "leading-7",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={` font-body bg-sec4 rounded-xl border-sec1 text-${size} placeholder-${color} ${weight} ${lineHeight} ${className} border p-2 outline-none`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

// LongInputWithPlaceholder Component
export const LongInputWithPlaceholder = forwardRef(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base",
      color = "gray-500",
      weight = "font-normal",
      lineHeight = "leading-7",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 font-body rounded-xl border-sec1 text-${size} placeholder-${color} ${weight} ${lineHeight} ${className} border p-2 outline-none`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

export const MediumInputWithPlaceholder = forwardRef(
  (
    {
      placeholder = "Enter text...",
      className = "",
      size = "base",
      color = "gray-500",
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 font-body rounded-xl border-sec1 p-2 outline-none ${className} text-${size} placeholder-${color}`}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

// PropTypes validation
LongInputWithPlaceholder.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
};

MediumInputWithPlaceholder.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
};

ShortInputWithPlaceholder.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
};
