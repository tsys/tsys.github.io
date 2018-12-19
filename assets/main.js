// Adjust header margin to accommodate floating nav
document.querySelector('header').style.marginTop = `${
    document.querySelector('nav').offsetHeight
}px`

// Create nav links
const navContainer = document.querySelector('#site-nav>.content')

const navItems = [
    {
        href: 'https://tsys.com',
        text: 'TSYS'
    },
    {
        href: 'https://developers.tsys.com',
        text: 'Docs'
    },
    {
        href: 'https://gitdhub.com/tsys',
        text: 'Open Source'
    },
    {
        href: 'https://medium.com/tsys-engineering',
        text: 'Blog'
    }
]

navItems.forEach((item) => {
    const a = document.createElement('a')
    a.href = item.href
    a.target = '_blank'
    a.textContent = item.text
    navContainer.appendChild(a)
})

// Create cards
const cardContainer = document.querySelector('.card-container')

const cards = [
    {
        title: 'Explore APIs',
        body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptas ducimus natus asperiores ea quos nihil accusamus quod.',
        link: {
            href: 'https://developers.tsys.com/api',
            text: ''
        }
    },
    {
        title: 'View My Apps',
        body:
            'Eveniet voluptas ducimus natus asperiores ea quos nihil accusamus quod. Modi officia non inventore odit, consequatur natus veniam.',
        link: {
            href: 'https://developers.tsys.com/applications',
            text: ''
        }
    },
    {
        title: 'Resources',
        body:
            'Modi officia non inventore odit, consequatur natus veniam. Natus placeat repellendus pariatur.',
        link: {
            href: 'https://developers.tsys.com/resources',
            text: ''
        }
    }
]

cards.forEach(function(card) {
    const section = document.createElement('section')
    section.classList.add('card')

    const h3 = document.createElement('h3')
    h3.textContent = card.title
    section.appendChild(h3)

    if (card.body) {
        const p = document.createElement('p')
        p.textContent = card.body
        section.appendChild(p)
    }

    const a = document.createElement('a')
    a.href = card.link.href
    a.textContent = card.link.text || card.title
    a.target = '_blank'
    section.appendChild(a)

    cardContainer.appendChild(section)
})
