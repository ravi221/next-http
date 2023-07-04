// import useSWR from 'swr'
import { useEffect } from "react";
import { buildFestivalPath, extractFestivals } from "./api/festivals";

type Data = [
  {
    "name": "string",
    "bands": [
      {
        "name": "string",
        "recordLabel": "string"
      }
    ]
  }
]
function festivalsPage(props: Data) {
    console.log(props);
}

export async function getStaticProps() {
  const res = await
    fetch("https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals");
    const data = await res.json();
    return {
        props: {
            festivals: data,
        },
        revalidate: 3,
    };
  
}

export default festivalsPage;