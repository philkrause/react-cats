import React, { Component } from 'react'
import Header from './components/Header'
import CatClass from './components/CatClass'
import Footer from './components/Footer'
const Cats = [
  {
    name: 'Octobi Wan Catnobi',
    id: '#3',
    src: 'https://octodex.github.com/images/octobiwan.jpg',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Stormtroopocat',
    id: '#86',
    src: 'https://octodex.github.com/images/stormtroopocat.png',
    author: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Doctocat Brown',
    id: '#68',
    src: 'https://octodex.github.com/images/doctocat-brown.jpg',
    author: 'https://github.com/jonrohan.png'
  },
  {
    name: 'Octocat De Los Muertos',
    id: '#56',
    src: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Dunetocat',
    id: '#105',
    src: 'https://octodex.github.com/images/dunetocat.png',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'Daftpunktocat-Thomas',
    id: '#102',
    src: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    author: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Heisencat',
    id: '#78',
    src: 'https://octodex.github.com/images/heisencat.png',
    author: 'https://github.com/jonrohan.png'
  },
  {
    name: 'Boxertocat',
    id: '#143',
    src: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    author: 'https://github.com/rubyjazzy.png'
  },
  {
    name: 'Justicetocat',
    id: '#136',
    src: 'https://octodex.github.com/images/justicetocat.jpg',
    author: 'https://github.com/heyhayhay.png'
  },
  {
    name: 'Gobble-o-tron',
    id: '#120',
    src: 'https://octodex.github.com/images/gobbleotron.gif',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'X-tocat',
    id: '#36',
    src: 'https://octodex.github.com/images/xtocat.jpg',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Saritocat',
    id: '#114',
    src: 'https://octodex.github.com/images/saritocat.png',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'Yaktocat',
    id: '#109',
    src: 'https://octodex.github.com/images/yaktocat.png',
    author: 'https://github.com/jeejkang.png'
  },
  {
    name: 'Dunetocat',
    id: '#112',
    src: 'https://octodex.github.com/images/dunetocat.png',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    name: 'IronCat',
    id: '#25',
    src: 'https://octodex.github.com/images/ironcat.jpg',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    name: 'Murakamicat',
    id: '#83',
    src: 'https://octodex.github.com/images/murakamicat.png',
    author: 'https://github.com/billyroh.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ul className="outer-image">
          {Cats.map(cat => {
            return (
              <CatClass
                id={cat.id}
                key={cat.id}
                name={cat.name}
                src={cat.src}
                author={cat.author}
              />
            )
          })}
        </ul>
        <Footer />
      </>
    )
  }
}

export default App
