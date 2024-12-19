import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./HoverDropdown.css";
import { Link } from "react-router-dom";

export default function CategoryDropdown(props) {
  let { title, elements } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isTouchInput, setIsTouchInput] = useState(false);
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      setIsOpen(true);
    }
  }, [isOverButton, isOverList, isOpen, isTouchInput]);

  const handleMouseEnterButton = () => {
    setIsOverButton(true);
  };

  const handleMouseLeaveButton = () => {
    setIsOverButton(false);
  };

  const handleMouseEnterList = () => {
    setIsOverList(true);
  };

  const handleMouseLeaveList = () => {
    setIsOverList(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTouchStart = () => {
    setIsTouchInput(true);
  };

  return (
    <div className="menu">
      <button
        ref={button}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeaveButton}
        onClick={handleToggleDropdown}
      >
        <span>{title}</span> <span aria-hidden>▾</span>
      </button>
      {isOpen && (
        <ul
          className="menu-list"
          onMouseEnter={handleMouseEnterList}
          onMouseLeave={handleMouseLeaveList}
        >
          {elements.map((element, i) => (
            <li key={i} className="element-dropdown">
              <Link to={`${element}`}>{element}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
