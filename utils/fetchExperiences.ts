import { Experience } from "../typings";

export const fetchExperiences = async() =>{
   const baseUrl = process.env.NODE_ENV === "production" ? "https://mohitkrsuman.vercel.app" : "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/getExperience`);
   const data = await res.json();
   const experiences : Experience[] = data.experiences;

   return experiences;
}