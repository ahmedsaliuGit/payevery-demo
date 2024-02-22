import React from "react";
import useColorChangingList from "../hooks/useColorChangingList";
import { ListType } from "../definitions";

const ColorChangingList: React.FC = () => {
  // Define your list items

  const listItems: ListType<string | number>[] = [
    { name: "Item 1", path: "", age: 1 },
    { name: "Item 2", path: "" },
    { name: "Item 3", path: "" },
    { name: "Item 4", path: "" },
    { name: "Item 5", path: "" },
  ];

  const activeItem = useColorChangingList(listItems);

  return (
    <ul>
      {listItems.map((item, index) => (
        <li
          key={index}
          style={{ color: index === activeItem ? "red" : "black" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ColorChangingList;
