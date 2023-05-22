import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedsortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const Shorting = ({ onSelectedsortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div style={{ paddingBottom: "10px" }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((shortitem) => (
            <MenuItem
              onClick={() => onSelectedsortOrder(shortitem.value)}
              key={shortitem.value}
              value={shortitem.value}
            >
              {shortitem.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Shorting;
