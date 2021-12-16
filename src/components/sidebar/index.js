import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import NotesIcon from '@mui/icons-material/Notes';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import ContactsIcon from '@mui/icons-material/Contacts';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#46a8ff',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      third: {
        light: '#5fba7d',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


export default function Sidebar() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Stack spacing={3} className='botao-grupo'>
                    <h1 className='font-h1'>Portfolio</h1>
                    <h3 className='font-h3'>Currículo online</h3>
                    <Divider variant="middle"sx={{width: '100%'}} />
                    <Link to="/" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<HomeIcon/>} size='large'>Home</Button></Link>
                    <Link to="/about" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<InfoIcon/>} size='large'>Sobre</Button></Link>
                    <Link to="/projects" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<AccountTreeIcon/>} size='large'>Projetos</Button></Link>
                    <Link to="/experience" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<NotesIcon/>} size='large'>Experiência</Button></Link>
                    <Link to="/academics" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<SchoolIcon/>} size='large'>Acadêmico</Button></Link>
                    <Link to="/hobbies" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<SportsEsportsIcon/>} size='large'>Hobbies</Button></Link>
                    <Link to="/contact" className='link-sem-decoration'><Button className='botao-estilo' color='primary' variant='outlined' startIcon={<ContactsIcon/>} size='large'>Contato </Button></Link>
                </Stack>
            </ThemeProvider>
        </div>
    )
}
