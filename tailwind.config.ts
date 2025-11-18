import type { Config } from "tailwindcss";

///Solo configuracion tailwind  v4

export default  {
  content: ['./src/**/*.{html,ts}'], 
  theme: {

    extend:{
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },        
      borderRadius:{
            primary:'13px',
            smr:'15px'
         }
    }
  }
  
}satisfies Config;