import React from 'react';
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder, OpenInNew } from '@mui/icons-material';

export default function MenuList4Admin() {
  const [isOpen, setOpen] = React.useState(true);
  const openExternal = url => window.open(url, "_blank");

  const menuData = [
    {site: 'MUI', url: 'https://mui.com'},
    {site: 'MUI-icons', url: 'https://mui.com/material-ui/material-icons'},
    {site: 'React Router', url: 'https://reactrouter.com'},
    {site: 'Zustand', url: 'https://github.com/pmndrs/zustand'},
    {site: 'CreateReactApp', url: 'https://create-react-app.dev'},
    {site: 'React.js Official', url: 'https://reactjs.org/'},
  ];

  return <>
    <Divider />
    <List subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        [개발 모드 전용 메뉴]
      </ListSubheader>
    }>
      <ListItemButton onClick={e=>setOpen(!isOpen)}>
        <ListItemIcon><StarBorder /></ListItemIcon>
        <ListItemText primary="Develop Links" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuData.map((item, idx) => 
            <ListItemButton key={idx}
              sx={{ pl: 5 }}
              onClick={e=>openExternal(item.url)}
            >
              <ListItemIcon><OpenInNew /></ListItemIcon>
              <ListItemText primary={item.site} />
            </ListItemButton>
          )}
        </List>
      </Collapse>
    </List>
  </>;
};