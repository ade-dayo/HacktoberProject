import PropTypes from "prop-types";

export const Text = ({
  children,
  className = "",
  size = "base",
  color = "black",
  weight = "font-normal",
  lineHeight = "leading-7",

}) => {
  return (
    <p
      className={`text-${size} font-body text-${color} ${weight} ${lineHeight} ${className}`}
    >
      {children}
    </p>
  );
};

export const Heading = ({
  level = 1,
  children,
  className = "",
  size = "2xl",
  color = "black",
  weight = "font-normal",
  font = "font-body",
  lineHeight = "leading-7",
}) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={`text-${size} ${font} text-${color} font-bold ${className} ${weight} ${lineHeight}`}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
  font: PropTypes.string,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
};
