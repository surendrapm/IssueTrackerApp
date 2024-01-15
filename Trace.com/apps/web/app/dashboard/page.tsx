import { Flex, Grid } from '@radix-ui/themes';
import React from 'react';

const DashboardPage = () => {
  // Your component logic here
  return <Grid columns={{ initial: '1', md: '2' }} gap="5">
            <Flex direction="column" gap="5">

           <div>dashbaord</div>
            </Flex>


  </Grid>
};

export default DashboardPage;
