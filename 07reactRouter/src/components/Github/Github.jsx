import React, { useEffect , useState} from "react";

export default function Github(){
    const [data, setData] = useState([]);
    useEffect( () => {
        const fetchData = async () => {

            try{
                const res = await fetch('https://api.github.com/users/devkkaran1') 
    
                const result = await res.json();
                console.log(result);
                 setData(result)
                 console.log(data);
                 
            }
            catch(error){
                    console.error(
                        'Error in  fetching Data: ' , error
                    )
            }
        }
            fetchData();
    }, [])

    return (
        <>
        <div className="text-center bg-yellow-300 text-green-950 text-3xl p-4">GitHub Followers {data.followers}</div>
        <img src={data.avatar_url} alt="Git Hub Avatatr" className="block mx-auto mt-3" />
        </>
    )
}