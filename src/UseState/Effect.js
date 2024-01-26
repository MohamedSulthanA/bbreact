import { useState , useEffect} from "react"
export default function Effect(){
    const [data,setData]= useState(null);

    useEffect(() =>{
         fetch().then
    })
}
return(
    <div>
        {
            data?(
                <p>
                    Data: {data}
                </p>
            ):(
                <p>Loading.....</p>
            )
        }
    </div>
)