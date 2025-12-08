import "./ArdiWrapper.css";
import PropTypes from "prop-types";

export default function ArdiWrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

ArdiWrapper.propTypes = {
  children: PropTypes.node,
};
