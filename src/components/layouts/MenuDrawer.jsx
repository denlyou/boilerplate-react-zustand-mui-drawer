import { useTheme } from '@mui/material/styles';
import { Divider, Drawer, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Local import ...
import { CONSTANT } from '../../Constant.js';
import useGlobalStore from '../../stores/globalStore.js';
import MenuList from './MenuList.jsx';
import DrawerHeader from './DrawerHeader.jsx';

export default function MenuDrawer() {
  const theme = useTheme();
  const [isMenuOpen, setMenuOpen] = useGlobalStore(state => [state.isMenuOpen, state.setMenuOpen]);

  return (
    <Drawer
      sx={{
        width: CONSTANT.DrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: CONSTANT.DrawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isMenuOpen}
    >
      <DrawerHeader>
        <IconButton onClick={e=>setMenuOpen(false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      
      <MenuList />
    </Drawer>
  );
};