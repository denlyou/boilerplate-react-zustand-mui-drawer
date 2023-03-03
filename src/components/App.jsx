import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// Local imports..
import { CONSTANT } from '../Constant';
import useGlobalStore from '../stores/globalStore';
import './App.css';
import AppHeader from './layouts/AppHeader.jsx';
import MenuDrawer from './layouts/MenuDrawer.jsx';
import DrawerHeader from './layouts/DrawerHeader';
import HomePage from './page/HomePage.jsx';
// Lazy Components..
const SubPage = React.lazy(() => import('./page/SubPage.jsx'));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${CONSTANT.DrawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

export default function App() {
  const isMenuOpen = useGlobalStore(state => state.isMenuOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader />
      <MenuDrawer />      
      <Main open={isMenuOpen}>
        <DrawerHeader />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/sub" element={
            <Suspense fallback={<div>Loading...</div>}><SubPage/></Suspense>
          } />
        </Routes>
        
      </Main>
    </Box>
  );
}
