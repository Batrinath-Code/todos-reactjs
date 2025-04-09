import React from "react";

function Tab({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];
  return (
    <>
      <nav className="tab-container">
        {tabs.map((tab, tabIndex) => {
          const noOfTask =
            tab === "All"
              ? todos.length
              : tab === "Open"
              ? todos.filter((val) => !val.completed).length
              : todos.filter((val) => val.completed).length;

          return (
            <button
              key={tabIndex}
              onClick={() => {
                setSelectedTab(tab);
              }}
              className={`tab-button ${
                tab === selectedTab ? "tab-selected" : ""
              }`}
            >
              <h4>
                {tab}
                <span>({noOfTask})</span>
              </h4>
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Tab;
