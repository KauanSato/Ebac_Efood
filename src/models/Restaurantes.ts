class Restaurantes {
  title: string
  destaque?: string
  categoria: string
  image: string
  desc: string
  rating: number
  id: number

  constructor(
    title: string,
    categoria: string,
    image: string,
    desc: string,
    rating: number,
    id: number
  ) {
    this.title = title
    this.categoria = categoria
    this.image = image
    this.desc = desc
    this.rating = rating
    this.id = id
  }
}

export default Restaurantes
