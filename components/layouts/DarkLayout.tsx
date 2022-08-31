import { FC } from "react"

 interface Props {
  children: React.ReactNode;
}



export const DarkLayout: React.FC<Props> = ({ children }) =>  {
 
  return (
     <div style={{
        backgroundColor: 'rgba(200,200,200,0.3)',
        borderRadius: '5px',
        padding: '10px',

     }}>
        <h3>Dark Layout</h3>
        <div>
            { children }
        </div>
        
     </div>
  )
}
