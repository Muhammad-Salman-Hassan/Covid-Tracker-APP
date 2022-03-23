import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function GlobalData() {

    const [globaldata, setglobaldata] = React.useState({})
    useEffect(()=>{
        async function fetchData(){
            let url="https://covid19.mathdro.id/api"
            const response= await fetch(url)
            const data=await response.json()
            setglobaldata(data)
        }
        fetchData()
    },[])
    console.log(globaldata.confirmed.value)




  return (
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
        Global Data
        <Typography variant="h3" component="h2" sx={{marginTop:"5px"}}>
          1000
        </Typography>
      </Paper>
      <Paper elevation={3}>
        Active
        <Typography variant="h3" component="h2" sx={{marginTop:"5px"}}>
          1000
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
          1000
        </Typography>
      </Paper>
    </Box>
  );
}
