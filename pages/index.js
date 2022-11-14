import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';
import { BASE_PATH } from '../configs/constants';

export default function Home() {
  const router = useRouter();

  const gotoProject = (route) => () => router.push(route);

  return (
    <>
      <Head>
        <title>Willy Horizont</title>
        <meta name="description" content="christian willy horizont portfolio" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
      </Head>

      <MainLayout>
        <Typography gutterBottom variant="h1" component="div" textAlign="center">
          Willy Horizont&apos;s Portfolio
        </Typography>
        <Typography gutterBottom variant="h2" component="div" textAlign="center">
          Fullstack Web App Developer
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('projects/file-url-to-base64')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    File Url to Base64
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Convert File Url String to Base64 String
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('projects/file-to-base64')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    File to Base64
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload a File and Convert it to Base64 String
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/partial-text-search-using-regex')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Partial Text Search Using Regex
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Generate and Test Regex for Indonesian Pronounciation
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/autocomplete-searchbox')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Autocomplete Searchbox
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Autocomplete Searchbox Dropdown List Select Option API
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/google-maps-places-autocomplete-and-reverse-geocode')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Google Maps Places Autocomplete And Reverse Geocode
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Google Maps Places Autocomplete with Reverse Geocode on Map Click
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/google-maps-embed-streetview-generator')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Google Maps Embed Street View Generator
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Generate Google Map Streetview Embedded Iframe By Lat Long
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/lat-long-scrapper')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lat Long Scrapper
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Google Maps API Places SearchBox Lat Long Scrapper
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/google-maps-api-key-tester')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Google Maps API Key Tester
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Test what google maps api key can be used for
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/chip-input')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chip Input Component
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chip Input Component for Categories, Tags, etc
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={gotoProject('/projects/longlat-to-latlong')}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Longlat to Latlong
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Convert Longlat to Latlong
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </MainLayout>

      {/* <footer style={{ display: 'flex', flex: 1, padding: '2rem 0', borderTop: '1px solid #eaeaea', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>
          Made with ❤️
        </Typography>
      </footer> */}
    </>
  );
}
