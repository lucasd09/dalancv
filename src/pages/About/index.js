import React from 'react'
import { Avatar, Container, Grid } from '@mui/material'
import imagem from '../../utils/imgAbout.jpg'


export default function About() {
    return (
        <div className='page-estilo'>
            <Container sx={{width: 900}}>
                <Grid container md={12}>
                    <Grid item md={3}><Avatar src={imagem} sx={{ width: 180, height: 180 }}/></Grid>
                    <Grid item md={8} sx={{textAlign: 'start'}}>
                        <h1>Lucas Dalan</h1>
                        <h3>Developer | React | Python | Web 3.0 | Ciências Da Computação </h3>
                    </Grid>
                </Grid>
                <Container sx={{paddingTop: 5, textAlign: "justify"}}>
                    <p>Me chamo Lucas Dalan, estou cursando ciências da computação. Tenho experiência em desenvolvimento, rotinas e fluxos, além de outras hard skills que adquiri ao longo do meu aprendizado. Em termos de soft skills, minhas principais são: Princípios éticos, Confiança, Atitude positiva, Comunicação e por último, Inteligência Emocional.
                    Possuo experiência nas áreas Web, Desk, com as seguintes tecnologias: HTML, CSS, JS e Delphi.
                    Além disso, tenho conhecimento em SQL, java, Python, C e ReactJs.
                    Entre em contato comigo! Adoraria fazer parte do seu projeto!
                    </p>
                </Container>
                
            </Container>
        </div>
    )
}
