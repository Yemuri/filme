import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Inicio from './pages/Inicio/Inicio'
import FilmesEmCartaz from './pages/Filmes/FilmesEmCartaz'
import FilmesPopulares from './pages/Filmes/FilmesPopulares'
import FilmesEstreias from './pages/Filmes/FilmesEstreias'
import SeriesEmCartaz from './pages/Series/SeriesEmCartaz'
import SeriesPopulares from './pages/Series/SeriesPopulares'
import SeriesEstreias from './pages/Series/SeriesEstreias'
import Contato from './pages/Contato/Contato'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/FilmesPopulares' element={<FilmesPopulares />} />
                <Route path='/FilmesEmCartaz' element={<FilmesEmCartaz />} />
                <Route path='/FilmesEstreias' element={<FilmesEstreias />} />
                <Route path='/SeriesEstreias' element={<SeriesEstreias />} />
                <Route path='/SeriesEmCartaz' element={<SeriesEmCartaz />} />
                <Route path='/SeriesPopulares' element={<SeriesPopulares />} />
                <Route path='/Contato' element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}