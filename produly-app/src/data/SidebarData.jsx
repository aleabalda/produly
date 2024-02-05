import ListIcon from "@mui/icons-material/List";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

export const SidebarData = [
  {
    name: "home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    name: "to-do lists",
    icon: <ListIcon />,
    path: "/todos",
  },
  {
    name: "calendar",
    icon: <CalendarMonthIcon />,
    path: "/calendar",
  },
  {
    name: "journal",
    icon: <MenuBookIcon />,
    path: "/journal",
  },
];
