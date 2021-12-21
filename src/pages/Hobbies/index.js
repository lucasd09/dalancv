import { Container, Stack } from '@mui/material'
import React from 'react'
import CardHobbies from '../../components/CardHobbies'
import imagem from '../../utils/logo512.png'

export default function Hobbies() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Hobbies</h1>
                <Stack spacing={3}>
                    <CardHobbies img={imagem} title='Video-Games' text='texto teste'/>
                    <CardHobbies img={imagem} title='Música' text='texto teste'/>
                    <CardHobbies img={imagem} title='titulo teste' text='texto teste'/>
                </Stack>
            </Container>
        </div>
    )
}
