import react from "react";
export const List = ({ list }) => {
  return (
    <div className="list">
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
