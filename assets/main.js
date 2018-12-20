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
        text: 'APIs'
    },
    {
        href: 'https://github.com/tsys',
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
        title: 'Issuing Essentials in North America',
        body:
            'Card, Account Payments, Customer, Financial Institutions, and Transaction APIs.',
        link: {
            href: 'https://developers.tsys.com/api/product?key=Issuing+Essentials',
            text: 'Issuing Essentials'
        }
    },
    {
        title: 'Loyalty Experiences',
        body:
            'Rewards APIs allow customers to see the rewards they have earned through their loyalty account. These APIs also let the customer spend and redeem their rewards.',
        link: {
            href: 'https://developers.tsys.com/api/product?key=Loyalty+Experiences',
            text: ''
        }
    },
    {
        title: 'Digital Experiences in International',
        body:
            'Payment, Activations, Identity Providers, Activity, Alerts and other APIs that enable world class digital experience.',
        link: {
            href: 'https://intl.developers.tsys.com/api/product?key=Digital+Experiences',
            text: 'Digital Experiences'
        }
    }
]

cards.forEach((card) => {
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
