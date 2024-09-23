// hooks banavti vakhte .js ma karvu karan ke aama pure js code hoy che

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/inr.json


import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
                );
                const result = await res.json();
                
                setData(result[currency]); // result already contains the relevant data
                // console.log(` Comes From currencyInfo.Js ${data}`);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };
        fetchData();
    }, [currency]);

    return data; // return the fetched data
}

export default useCurrencyInfo;
