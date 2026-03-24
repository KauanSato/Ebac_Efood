class Pratos {
  title: string
  image: string
  desc: string
  id: number
  descP: string
  preco: string

  constructor(
    title: string,
    image: string,
    desc: string,
    id: number,
    descP: string,
    preco: string
  ) {
    this.title = title
    this.image = image
    this.desc = desc
    this.id = id
    this.descP = descP
    this.preco = preco
  }
}

export default Pratos
