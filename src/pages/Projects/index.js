import { Container, Grid } from '@mui/material'
import React from 'react'
import CardProject from '../../components/cardProject'

export default function Projects() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Meus Projetos</h1>
                <h3>Projetos que já fiz ou estou fazendo</h3>
                <Grid container md={12} className='botao-grupo'>
                    <Grid item md={4}><CardProject title='teste título' text='teste com imagem titulo e texto' imgPath='/dalancv/publiclogo512.png'/></Grid>
                    <Grid item md={4}><CardProject title='teste título' text='teste com imagem titulo e texto' imgPath='/dalancv/publiclogo512.png'/></Grid>
                    <Grid item md={4}><CardProject title='teste título' text='teste com imagem titulo e texto' imgPath='/dalancv/publiclogo512.png'/></Grid>
                </Grid>
            </Container>
        </div>
    )
}
