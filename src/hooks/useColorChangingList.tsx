import { useState, useEffect } from "react";
import { ListType } from "../definitions";

const useColorChangingList = (listItems: ListType<string | number>[]) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  // Function to change Item at a given index
  const changeItem = (index: number): void => {
    if (index === listItems.length - 1) return setActiveItem(0);
    return setActiveItem(index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Change color for each list item
      changeItem(activeItem);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [listItems, activeItem]);

  return activeItem;
};

export default useColorChangingList;
