import { Social } from "../typings";

export const fetchSocials = async() =>{
   const baseUrl = process.env.NODE_ENV === "production" ? "https://mohitkrsuman.vercel.app" : "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/getSocials`);
   const data = await res.json();
   const socials : Social[] = data.socials;

   return socials;
}