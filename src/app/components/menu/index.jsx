import menuItems from "./items";
import MenuItem from "./MenuItem";
const index = () => {
  return menuItems.map((item, index) => <MenuItem key={index} item={item} />);
};

export default index;
