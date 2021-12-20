import './header.module.css';
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useKeycloak } from '@react-keycloak/web';

const pages = [
  {
    name: 'Admin',
    path: 'http://localhost:4220',
  },
  {
    name: 'Consumer',
    path: 'http://localhost:4200',
  },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

/* eslint-disable-next-line */
export interface HeaderProps {
  selectedPath: string;
}

export function Header(props: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function getStyle(path: string) {
    if (props.selectedPath == path) {
      return { color: 'black', display: 'block', textDecoration: 'none' };
    } else {
      return { color: 'white', display: 'block' };
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            SanSoft
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            SanSoft
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <a
                key={page.name}
                onClick={handleCloseNavMenu}
                className="mx-3"
                style={getStyle(page.name)}
                href={page.path}
              >
                {page.name}
              </a>
            ))}
          </Box>
          <UserAuthStatus />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function UserAuthStatus() {
  const { keycloak, initialized } = useKeycloak();
  let [userName, setUserName] = useState('');

  interface UserInfo {
    user_name: string;
    given_name: string;
    email: string;
    name: string;
  }

  function fetchUserName(){
    if (keycloak && keycloak.authenticated) {
      keycloak.loadUserInfo().then((userInfo) => {
        let a = userInfo as UserInfo;
        setUserName(a.given_name);
      });
    }

    return userName
  }

  if (keycloak && keycloak.authenticated) {
    return <div>{`Welcome ${fetchUserName()}`}</div>;
  } else {
    return <> </>;
  }
}

export default Header;
