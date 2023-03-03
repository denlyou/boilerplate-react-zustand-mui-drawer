import { styled } from '@mui/material/styles';
import { Toolbar, IconButton, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
// Local import ...
import { CONSTANT } from '../../Constant.js';
import useGlobalStore from '../../stores/globalStore.js';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${CONSTANT.DrawerWidth}px)`,
    marginLeft: `${CONSTANT.DrawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppHeader() {
  const [isMenuOpen, setMenuOpen] = useGlobalStore(state=>[state.isMenuOpen, state.setMenuOpen]);

  return (
    <AppBar position="fixed" open={isMenuOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={e=>setMenuOpen(true)}
          edge="start"
          sx={{ mr: 2, ...(isMenuOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          메뉴 드러워
        </Typography>
      </Toolbar>
    </AppBar>
  );
};