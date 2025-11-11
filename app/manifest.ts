import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dimitris Palamidas - React & Angular Developer',
    short_name: 'Dimitris Palamidas',
    description: 'Portfolio of Dimitris Palamidas - Experienced React Developer and Angular Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/dimitrispalamidas.jpg',
        sizes: '600x600',
        type: 'image/jpeg',
        purpose: 'any maskable',
      },
    ],
  }
}

