import { Button, Container, Stack } from '@mui/material'
import React from 'react'

export default function Home() {

    return (
        <Container className='page-estilo' maxWidth='md'>
            <h1>Portfolio</h1>
            <h3>Lucas Dalan</h3>
            <Container className='botao-grupo'>
                <Stack direction="row" spacing={2} className='botao-grupo-a'>
                    <Button variant='outlined' disabled>Baixar CV</Button>
                    <Button variant='outlined' disabled href='/about'>Conhecer</Button>
                </Stack>
            </Container>      
        </Container>
    )
}
