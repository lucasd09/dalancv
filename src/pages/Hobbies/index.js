import { Container, Stack } from '@mui/material'
import React from 'react'
import CardHobbies from '../../components/hobbyCard'
import imagem from '../../utils/logo512.png'
import thewitcher from '../../utils/thewitcher.jpg'

export default function Hobbies() {
    return (
        <div className='page-estilo'>
            <Container>
                <h1>Hobbies</h1>
                <Stack spacing={3}>
                    <CardHobbies img={thewitcher} title='Video-Games' text='Gosto da dificuldade, jogo só se for na dificuldade máxima. Os jogos que estão no meu "Currículo" são: The Witcher 3: Wild Hunt, Batman Arkham Series (Todos eles, todos obras-primas),  Hades e Dark Souls.'/>
                    <CardHobbies img={imagem} title='Música' text='Sou muito eclético, meu spotify tem uma variedade de músicas que vai de Kurt Cobain até Tom Jobim. Toco guitarra, violão e ukulele. '/>
                    <CardHobbies img={imagem} title='Workout' text='É aqui que me desestresso. Comecei a treinar por querer uma válvula de escape para o dia a dia, mas peguei gosto pelos treinos e faço eles pelo menos três vezes na semana.'/>
                </Stack>
            </Container>
        </div>
    )
}
