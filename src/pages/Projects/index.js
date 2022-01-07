import { Container, Grid } from '@mui/material'
import React from 'react'
import CardProject from '../../components/cardProject'
import portfolio from '../../utils/portfolio.png'
import imagem from '../../utils/logo512.png'
import parimpar from '../../utils/parimpar.png'

export default function Projects() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Meus Projetos</h1>
                <h3>Projetos que já fiz ou estou fazendo</h3>
                <Grid container md={12} className='botao-grupo'>
                    <Grid item md={4}><CardProject title='Portfolio Online' text='Desenvolvido em react, um portfolio simples mostrando meu trabalho como desenvolvedor' imgPath={portfolio} wdt={345} link='https://github.com/lucasd09/dalancv'/></Grid>
                    <Grid item md={4}><CardProject title='Playground' text='Repositório de estudo voltado a testes com hardhat, solidity e JavaScript' imgPath={imagem} wdt={345} link='https://github.com/lucasd09/study-solidity'/></Grid>
                    <Grid item md={4}><CardProject title='Par ou Impar - Solidity' text='Contrato de um jogo de par ou impar com sistema de commit e recompensa por ganhador' imgPath={parimpar} wdt={345} link='https://github.com/lucasd09/nestjs-auth'/></Grid>
                </Grid>
            </Container>
        </div>
    )
}
