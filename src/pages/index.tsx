import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';

const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } />
      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'dsadsahdsahdsadsadsadsadsadsadsa',
            foto: 'https://emc.acidadeon.com/dbimagens/cachorro_pet_1200x675_01122021094401.jpg'
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'dsadsahdsahdsadsasaddasdsadasdsadsadsa',
            foto: 'https://blog.cobasi.com.br/wp-content/uploads/2020/07/Cuidados-com-cachorros-capa.png'
          }
        ]}
      />

    </div>
  )
}

export default Home
