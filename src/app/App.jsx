import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../app/App.jsx'
import inCard from '../component/inCard/inCard.jsx'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CenterFocusStrong } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import buttonsO from '../component/buttonsO/buttonsO.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  
   
      <>
       
        <Card sx={{ maxWidth:600,justifyContent:'center', backgroundColor:'#e0c677'}}>
        <Typography gutterBottom variant="h5" component="div" color='white' textAlign='center'>
          STUDENT MANAGEMENT SYSTEM
        </Typography>
      <CardMedia
        component="img"
        height="250"
        image="../src/assets/img1.jpg"
        
      />
      <CardContent justifyContent="center">
        
      <Typography variant="body2" color="text.secondary">        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container  spacing={2}>
        <Grid item xs={4}>
        <TextField id="outlined-uncontrolled" label="User Name" />
        </Grid>
        <Grid item xs={4}>
        <TextField id="outlined-uncontrolled" label="Password" />
        </Grid>
      </Grid>
      </Box>
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={8}>
        <Grid item xs={4}>
            <Button variant="contained" color="success" size="medium">Sign in</Button>
        </Grid>
        <Grid item xs={4}>
        <Button onClick={console.log('hi')} name={'Go to Dashboard'} bgColor={'#d2691e'}/>
        </Grid>
      </Grid>
      </Box>
      </CardActions>
    </Card>
       
    
      </>
    
  )
}

export default App
