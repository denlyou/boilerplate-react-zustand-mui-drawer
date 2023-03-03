import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const MenuList4Admin = React.lazy(() => import('./MenuList4Admin.jsx'));

export default function MenuList() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuData = [
    {path: '/', title: '첫 페이지', icon: <InboxIcon /> },
    {path: '/sub', title: '서브 페이지', icon: <MailIcon /> },
  ];

  const movePage = (path) => navigate(path);

  return <>
    <List component="nav">
      {menuData.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            onClick={e=>movePage(item.path)}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    { process.env.NODE_ENV !== 'production' && 
      <React.Suspense fallback={<div>Loading...</div>}>
        <MenuList4Admin/>
      </React.Suspense>
    }
  </>;
};