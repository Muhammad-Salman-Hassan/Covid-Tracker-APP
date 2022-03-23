import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import GlobalData from './GlobalData';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainGrid() {
  return (
    <Box sx={{ width: 1,marginTop:4}}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ marginLeft:5,marginRight:5}}>
        
        <Box gridColumn="span 3">
        <Item sx={{backgroundColor:"white",border:"none",boxShadow:"none"}}>
            <GlobalData/>
        </Item>
        </Box>
        <Box gridColumn="span 9">
          <Item>Country Data</Item>
        </Box>
      </Box>
    </Box>
  );
}