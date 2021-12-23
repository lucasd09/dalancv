import { Container, Stack } from '@mui/material'
import React from 'react'
import CardHobbies from '../../components/hobbyCard'
import imagem from '../../utils/logo512.png'

export default function Hobbies() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Hobbies</h1>
                <Stack spacing={3}>
                    <CardHobbies img={imagem} title='Video-Games' text='Gosto da dificuldade, jogo só se for na dificuldade máxima. Os jogos que estão no meu "Currículo" são: The Witcher 3: Wild Hunt, Batman Arkham Series (Todos eles, todos obras-primas),  Hades e Dark Souls.'/>
                    <CardHobbies img={imagem} title='Música' text='Sou muito eclético, meu spotify tem uma variedade de músicas que vai de Kurt Cobain até Tom Jobim. Música faz parte da minha vida, realizei um sonho ao conquistar minha primeira guitarra, como você pode ver na imagem.'/>
                    <CardHobbies img={imagem} title='titulo teste' text='texto teste'/>
                </Stack>
            </Container>
        </div>
    )
}
