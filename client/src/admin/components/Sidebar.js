import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Box, Divider } from "@mui/material";
import { Dashboard as DashboardIcon, School as SchoolIcon, Groups as GroupsIcon,People as PeopleIcon  } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { text: "Course Management", icon: <SchoolIcon />, path: "/admin/course" },
  { text: "Batch Management", icon: <GroupsIcon />, path: "/admin/batch" },
  { text: "User Enrollment", icon: <PeopleIcon />, path: "/admin/user" },
  // { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
   <>
   <div className="mt-3">
   <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "64px",
          backgroundColor: "#343a40",
          color: "white",
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <h4 className="text-center text-white">Admin Panel</h4>
        <Divider sx={{ backgroundColor: "white" }} />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  py: 1.5,
                  px: 2,
                  "&.Mui-selected": {
                    backgroundColor: "#007bff",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
   </div>
   </>
  );
};

export default Sidebar;
