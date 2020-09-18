import React from "react";

const Footer = (props) => {
  const {
    status,
    setStatusFilter,
    numOfTodos,
    numOfTodoLeft,
    clearCompleted,
  } = props;
  const lilterBtns = [
    {
      title: "All",
      isActived: status === "ALL",
      onClick: () => setStatusFilter("ALL"),
      link: "",
    },
    {
      title: "Active",
      isActived: status === "ACTIVE",
      onClick: () => setStatusFilter("ACTIVE"),
      link: "active",
    },
    {
      title: "Completed",
      isActived: status === "COMPLETED",
      onClick: () => setStatusFilter("COMPLETED"),
      link: "completed",
    },
  ];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodoLeft}</strong>
        <span></span>
        <span> {numOfTodoLeft <= 1 ? "item" : "items"}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {lilterBtns.map((btn) => (
          <FilterBtn key={`btn${btn.title}`} {...btn} />
        ))}
      </ul>
      {numOfTodos > numOfTodoLeft && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

const FilterBtn = (props) => {
  const { title, onClick, link, isActived } = props;
  return (
    <>
      <li>
        <a
          href={`#/${link}`}
          className={`${isActived ? "selected" : ""}`}
          onClick={onClick}
        >
          {title}
        </a>
      </li>
      <span></span>
    </>
  );
};

export default Footer;
