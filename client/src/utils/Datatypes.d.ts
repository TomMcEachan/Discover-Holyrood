export type Category = {
    id: number
    attributes: {
    name: string
    description: string
    color: string
  }
}

export type Article = {
  id: string
  attributes: {
    title: string
    subtitle: string
    image: Image
    link: string
    categories: {
      data: [
        {
          id: number
          attributes: {
            name: string
            description: string
            color: string
          }
        }
      ]
    }
  }
}

export type Image = {
  image: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string
          }
          large: {
            url: string
          }
          medium: {
            url: string
          }
          small: {
            url: string
          }
        }       
      }
    }
  }
}