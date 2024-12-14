import axios from "axios";
export const getNotes = async ()=>{
    try {
        const response = await axios.get("https://67597b75099e3090dbe1d697.mockapi.io/api/notes")
        return response.data;
        
        
        
      } catch (error) {
        console.log(error);
        
      }
}