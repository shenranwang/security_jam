const cards = [
    {
        name: 'VirusNew',
        description: 'very dangerous'
    },
    {
        name: 'nälänhätä',
        description: 'ihmiset kuolee'
    },
    {
        name: 'brute force',
        description: 'eioo'
    },
    {
        name: 'password manager',
        description: 'don\'t give your password to anyone',
        special: (passwordManagerUsed) => passwordManagerUsed ? console.log('jee') : console.log('jöö')
    },
    {
        name: 'botti',
        description: 'erityisen vaarallisia keskiajalla'
    }
]

export default cards