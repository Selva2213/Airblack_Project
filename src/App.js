import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, FormControlLabel, FormGroup, FormHelperText, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import CardActions from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import { Typography } from '@mui/material';
import bg1 from '../src/images/darkened.jpg'
import bg2 from '../src/images/darkened2.jpg'
import { Grid } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { FormControl, FormLabel, Checkbox } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
function App() {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <div className='home'>
        <Grid item xs={8}>
          <Card>
            <img src='/Image1.png' alt='dfg' width={500}>
            </img>
          </Card>
          <Card sx={{

            width: 485,
            backgroundColor: 'black',
            color: 'white',
          }}>
            <div className='secCard'>
              <h2>Professional Online Makeup Course </h2>
            </div>
            <div className='centering'>
              <Box display="flex" alignItems="center" sx={{
                bgcolor: 'grey', border: '2px solid white',
                borderRadius: '8px',
                padding: '5px',
                width: 300,
                height: 30,
              }}>
                <BookmarkIcon style={{ marginRight: 8 }} />
                <h4> Certification programme</h4>
              </Box>
              <Box display="flex" alignItems="center" sx={{
                color: 'yellow',
                border: '2px solid white',
                borderRadius: '8px',
                padding: '5px',
                width: 300,
                height: 30
              }}>
                <StarRateIcon style={{ marginRight: 8 }} />
                <h4>Rated 4.85/5</h4>
              </Box>
            </div>
            <Box display="flex" alignItems="center" sx={{ paddingLeft: 5 }} >
              <DoneIcon style={{ marginRight: 8 }} />
              <Typography variant='h5'>India's No.1 Oline Makeup Course</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ paddingLeft: 5 }}>
              <DoneIcon style={{ marginRight: 8 }} />
              <Typography variant='h5'>Learn by LIVE Do-Tt-Together Classes</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ paddingLeft: 5 }}>
              <DoneIcon style={{ marginRight: 8 }} />
              <Typography variant='h5'>Unlimited Practice Session to master skills</Typography>
            </Box>
            <Box component="form" sx={{ maxWidth: 400, mx: 'auto', mt: 4, bgcolor: 'white', color: 'black', borderRadius: '8px' }}>
              <Card sx={{ bgcolor: 'violet', borderRadius: '8px' }}>
                <Typography variant="h5" component="h1" sx={{ paddingLeft: 5 }} gutterBottom>
                  Fill the form below to Enquire
                </Typography>
              </Card>
              <FormControl component="fieldset" variant="standard" fullWidth>
                <FormGroup>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      label="Name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      required
                      placeholder='Eg.Kevin'
                    />
                    <FormHelperText>Please enter your full name</FormHelperText>                    
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      label="Whatsapp Number"
                      name="name"
                      variant="outlined"
                      fullWidth
                      required
                      placeholder='Eg.00000000000'
                    />
                    <FormHelperText>Please enter your Whatsapp number</FormHelperText>                    
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <InputLabel id="demo-simple-select" required>Proffesion</InputLabel>
                    <Select
                      labelId="demo-simple-select"
                      id="demo-simple-select"
                      lable="Proffession"
                      required
                    >
                      <MenuItem >Data Science</MenuItem>
                      <MenuItem>System analysist</MenuItem>
                      <MenuItem>Software Developer</MenuItem>
                      <MenuItem >Frontend Developer</MenuItem>
                      <MenuItem >Backend Developer</MenuItem>
                      <MenuItem >Full stack Developer</MenuItem>
                    </Select>
                    <FormHelperText>Choose the most relevent option</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <InputLabel id="demo-simple-select" required>Goal</InputLabel>
                    <Select
                      labelId="demo-simple-select"
                      id="demo-simple-select"
                      lable="Proffession"
                      required                      
                    >
                      <MenuItem >Show Long-term Vision</MenuItem>
                      <MenuItem >Be Honest</MenuItem>
                      <MenuItem >Authentic</MenuItem>
                      <MenuItem >Be Specific </MenuItem>
                      <MenuItem >Measurable</MenuItem>
                    </Select>
                    <FormHelperText>Choose the most relevent option</FormHelperText>
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <InputLabel id="demo-simple-select" required>City</InputLabel>
                    <Select
                      labelId="demo-simple-select"
                      id="demo-simple-select"
                      lable="Proffession"
                      required                      
                    >
                      <MenuItem >Banglore</MenuItem>
                      <MenuItem >Chennai</MenuItem>
                      <MenuItem >Coimbatore</MenuItem>
                      <MenuItem >Gurugram </MenuItem>
                      <MenuItem >Mumbai</MenuItem>
                    </Select>
                    <FormHelperText>Choose the most relevent option</FormHelperText>
                  </FormControl>
                </FormGroup>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Card>
          <Card>
          <img src='/81.png' alt='dfg' width={500}>
            </img>
          </Card>
          <Card>
          <img src='/101.png' alt='dfg' width={500}>
            </img>
          </Card>
          <Card>
          <img src='/Footer1.png' alt='dfg' width={500}>
            </img>
          </Card>
        </Grid>
      </div >
      <Grid item xs={2}></Grid>
    </Grid >

  );
}

export default App;
