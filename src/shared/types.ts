export enum SelectedPage {
  Home = "home",
  Fitness = "fitness",
  MartialArts = "martialarts",
  ContactUs = "contactus",
  Waivers = "waivers",
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: string
}
