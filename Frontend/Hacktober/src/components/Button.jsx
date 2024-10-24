import PropTypes from "prop-types";

export const ButtonSmallBlack = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]",
  bg = "primary2"
}) => {
  return (
    <button
      className={`${width} h-14 font-body rounded-2xl p-4 text-primary1 bg-${bg} opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonLongBlack = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]", // Default width
}) => {
  return (
    <button
      className={`${width} font-body h-14 rounded-2xl p-4 text-primary1 bg-primary2 border border-primary1 opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonSmallGray = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
  width = "w-[202px]",
  padding='4'
}) => {
  return (
    <button
      className={`${width} font-body h-14 rounded-2xl p-${padding} text-primary4 bg-sec2 border border-primary3 opacity-80 hover:opacity-100 ${
        disabled ? "opacity-70" : "opacity-100"
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// PropTypes for the width prop
ButtonSmallGray.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string, // New prop
};

ButtonLongBlack.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string, // New prop
};

ButtonSmallBlack.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string, // New prop
};
