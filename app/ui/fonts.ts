// en este archivo vamos a importar el metodo para traer la fuente del modulo next/font/google (google fonts)
import {Inter} from 'next/font/google'
import { Lusitana } from 'next/font/google';

// creamos las constante donde vamos a traer las fuentes que seran exportadas para usar en nuestro proyecto
export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({weight: ['400','700'], subsets: ['latin']});