const heading = React.createElement(
  "div",
  { id: "container" },
  React.createElement(
    "h1",
    { id: "heading" },
    "hello world from react separate file!!"
  ),
  React.createElement(
    "p",
    { id: "para" },
    React.createElement(
      "h3",
      {},
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ab, non vel iusto conquam."
    ),
    React.createElement("span", {}, "kdfgusdgfis")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
