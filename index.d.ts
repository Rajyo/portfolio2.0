interface ProjectCardProps {
  index: number
  inView1: boolean
  technicalStack: string
  item: {
    image: StaticImageData
    cover: StaticImageData
    title: string
    repo: string
    demo: string | null
    tags: string[]
    techStack: {
      id: number
      title: string
      logo: StaticImageData
    }[]
    mainStack: string
    info: {
      text: string
    }[]
    mininfo: string[]
  }
}

interface ProjectDropdownProps {
  techStack: string
  handleTechStack: (value: string) => void
}
