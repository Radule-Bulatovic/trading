import { Box, Toolbar, CssBaseline, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '../../../constants';

export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Box>
        <CssBaseline />
        <Box component="main">
          <Toolbar>
            <Tabs value={pathname}>
              <Tab label="XAU/USD" value={ROUTES.OVERVIEW} to={ROUTES.OVERVIEW} component={Link} />
              {/* <Tab
                label="Campaigns"
                value={ROUTES.CAMPAIGNS.LIST}
                to={ROUTES.CAMPAIGNS.LIST}
                component={Link}
              />
              <Tab
                label="Create Campaign"
                value={ROUTES.CAMPAIGNS.CREATE}
                to={ROUTES.CAMPAIGNS.CREATE}
                component={Link}
              /> */}
            </Tabs>
          </Toolbar>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
