import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

interface SidebarItemProps {
  path: string;
  text: string;
  icon: React.ReactElement;
  active: boolean;
  open: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  path,
  text,
  icon,
  active,
  open,
}) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <Link href={path} passHref>
        <ListItemButton
          sx={{
            justifyContent: open ? "initial" : "center",
            px: open ? 2.5 : 1,
            minHeight: "40px",
          }}
          className={`rounded-lg w-full mb-2 transition-all ${
            active ? "bg-green-100" : ""
          }`}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 1 : "auto",
              justifyContent: "center",
            }}
          >
            {React.cloneElement(icon, {
              className: `text-lg sm:text-base ${
                active ? "text-[#27AE60]" : "text-gray-600"
              }`,
            })}
          </ListItemIcon>

          {open && (
            <ListItemText
              primary={
                <p className="text-sm sm:text-base text-gray-700 hover:cursor-pointer">
                  {text}
                </p>
              }
              sx={{ display: { xs: "none", sm: "block" } }} // Hide text on extra small screens
            />
          )}
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
