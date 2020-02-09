export interface ICurrentWeatherApiData {

  weather: [
    {
      description: string,
      icon: string
    }
  ],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string

}
