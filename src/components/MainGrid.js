import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import GlobalData from './GlobalData';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainGrid({data:{confirmed , deaths, recovered, lastUpdate}}) {
  console.log(confirmed.value)
  if(!confirmed){
    return <div>looding....</div> 
  }
  return (
    <Box sx={{ width: 1,marginTop:4}}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{ marginLeft:5,marginRight:5}}>
        
        <Box gridColumn="span 3">
        <Item sx={{backgroundColor:"white",border:"none",boxShadow:"none"}}>
        <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 128,
        },
      }}
    >
      
      <Paper elevation={3}>
        Active
        <Typography variant="h3" component="h2" sx={{marginTop:"5px"}}>
          {/* {confirmed.value} */}
        </Typography>
      </Paper>
      <Paper elevation={3}>
        {" "}
        Recovered
        <Typography variant="h3" component="h2" sx={{marginTop:"5px"}}>
          1000
        </Typography>
      </Paper>
      <Paper elevation={3}>
        Fatatlitites
        <Typography variant="h3" component="h2" sx={{marginTop:"5px"}}>
          {/* {deaths.value} */}
        </Typography>
      </Paper>
    </Box>
        </Item>
        </Box>
        <Box gridColumn="span 9">
          <Item>Country Data</Item>
        </Box>
      </Box>
    </Box>
  );
}