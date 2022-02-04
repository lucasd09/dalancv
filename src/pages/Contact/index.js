import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import ComplexGrid from '../../components/ComplexGrid/ComplexGrid'
import resume from '../../utils/Lucas_Dalan_Resume.pdf'
import certificado from '../../utils/Certificado_Python.pdf'
import pdf1 from '../../utils/participantepdf.pdf'
import pdf2 from '../../utils/participantepdf (1).pdf'
import pdf3 from '../../utils/participantepdf (2).pdf'
import pdf4 from '../../utils/participantepdf (3).pdf'
import wpp from '../../utils/icon-whatsApp.png'
import insta from '../../utils/icon-instagram.png'
import linkedin from '../../utils/LinkedIn_icon_circle.svg.png'
import gmail from '../../utils/gmail-icon.png'
import github from '../../utils/github.png'
import DownloadIcon from '@mui/icons-material/Download';

export default function Contact() {
    return (
        <div className='page-estilo'>
            <Container  sx={{width: 900}}>
                <h1>Contato</h1>
                <Grid container spacing={2} md={12}>
                    <Grid item><ComplexGrid img={wpp} title='(14) 99708-6111'/></Grid>
                    <Grid item><ComplexGrid img={gmail} title='lucasdalan09@gmail.com'/></Grid>
                    <Grid item><ComplexGrid img={linkedin} title={<a className='link-sem-decoration' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lucasdalan/'>/lucasdalan</a>}/></Grid>
                </Grid>
                <Grid container spacing={2} md={12} sx={{paddingTop: 2, paddingBottom: 2}}>
                    <Grid item><ComplexGrid img={insta} title={<a className='link-sem-decoration' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lucasdalan/'>@lucas.dalan</a>}/></Grid>
                    <Grid item><ComplexGrid img={github} title={<a className='link-sem-decoration' target="_blank" rel="noreferrer" href='https://github.com/lucasd09'>lucasd09</a>}/></Grid>
                </Grid>
                <h2>Conteúdo para Download</h2>
                <Grid container spacing={2} md={12} sx={{paddingTop: 2}}>
                    <Grid item><Button variant='outlined' href={resume} download startIcon={<DownloadIcon/>}>Baixar CV</Button></Grid>
                    <Grid item><Button variant='outlined' href={certificado} download startIcon={<DownloadIcon/>}>Certificado python</Button></Grid>
                    <Grid item><Button variant='outlined' href={pdf1} download startIcon={<DownloadIcon/>}>Palestra "Finanças Mitos e Verdades"</Button></Grid>
                    <Grid item><Button variant='outlined' href={pdf2} download startIcon={<DownloadIcon/>}>10º CONGRESSO DE PESQUISA CIENTÍFICA</Button></Grid>
                    <Grid item><Button variant='outlined' href={pdf4} download startIcon={<DownloadIcon/>}>11º CONGRESSO DE PESQUISA CIENTÍFICA</Button></Grid>
                    <Grid item><Button variant='outlined' href={pdf3} download startIcon={<DownloadIcon/>}>XIV Semana de Tecnologia da Informação</Button></Grid>
                    <Grid item><Button variant='outlined' href={resume} download startIcon={<DownloadIcon/>}>placeholder</Button></Grid>
                </Grid>
            </Container>
        </div>
    )
}
