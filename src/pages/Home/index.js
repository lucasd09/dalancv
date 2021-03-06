import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import resume from '../../utils/Lucas_Dalan_Resume.pdf'

export default function Home() {

    return (
        <Container className='page-estilo' maxWidth='md'>
            <h1>Eu sou o Lucas</h1>
            <Container className='botao-grupo'>
                <Stack direction="row" spacing={2} className='botao-grupo-a'>
                    <Button variant='outlined' href={resume} download>Baixar CV</Button>
                    <Button variant='outlined' disabled href='/about'>Conhecer</Button>
                </Stack>
            </Container>      
        </Container>
    )
}
