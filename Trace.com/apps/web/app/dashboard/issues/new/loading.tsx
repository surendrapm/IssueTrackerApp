import { Box } from '@radix-ui/themes';
import { Skeleton } from '../../../components';


const loading = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton/>
    </Box>
  )
}

export default loading