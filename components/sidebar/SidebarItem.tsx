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
      <Link href={path}>
        <a>
          <ListItemButton
            sx={{
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            className={`rounded-lg mr-16 mb-3 h-[30px] ${
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
                className: `text-sm ${active ? "text-[#27AE60]" : ""}`,
              })}
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0, fontSize: "2px" }}>
              <p
                className={`text-sm hover:cursor-pointer ${
                  active ? "text-[#27AE60]" : "text-gray-700"
                }`}
              >
                {text}
              </p>
            </ListItemText>
          </ListItemButton>
        </a>
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
