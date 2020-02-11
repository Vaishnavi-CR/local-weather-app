export interface ICurrentWeather {

//names need not match with the external API
//we can map it later
city: string;
country: string;
date: number; //need to convert into actual date later
temperature: number;
description: string;
image: string; //take the value and give it to something later so that it converts into an URL and the image is downloaded
}
