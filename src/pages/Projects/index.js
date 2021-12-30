import { Container, Grid } from '@mui/material'
import React from 'react'
import CardProject from '../../components/cardProject'
import portfolio from '../../utils/portfolio.png'
import imagem from '../../utils/logo512.png'

export default function Projects() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Meus Projetos</h1>
                <h3>Projetos que já fiz ou estou fazendo</h3>
                <Grid container md={12} className='botao-grupo'>
                    <Grid item md={4}><CardProject title='Portfolio Online' text='Desenvolvido em react, um portfolio simples mostrando meu trabalho como desenvolvedor' imgPath={portfolio} wdt={345} link='https://github.com/lucasd09/dalancv'/></Grid>
                    <Grid item md={4}><CardProject title='Projeto B' text='Em processo de desenvolvmento. Envolve React, Solidity, Tecnologia Blockchain e mais' imgPath={imagem} wdt={345} link='https://github.com/lucasd09/study-solidity'/></Grid>
                    <Grid item md={4}><CardProject title='W.I.P' text='Work in Progress' imgPath={imagem} wdt={345}/></Grid>
                </Grid>
            </Container>
        </div>
    )
}
