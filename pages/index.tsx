import { InferGetStaticPropsType } from "next"

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

type PayloadData = [
  {
    "name": "string",
    "bands": [
      {
        "name": "string",
        "festival": [
          {
            "name": "string"
          }
        ]
      }
    ]
  }
]
let labelsArray: String[] = ["Winter Primates", "XS Recordings", "Pacific Records", "Outerscope", "Fourth Woman Records", "Outerscope", "Fourth Woman Records"]
let festivalsArray:Array<PayloadData> = []
let bandsArray:Array<PayloadData> = []

function festivalsPage( { festivals } : InferGetStaticPropsType<typeof getStaticProps> ) {
    console.log(festivals);
    return festivals.map((festival) => ( 
      festival.bands.map((band, index) => {
        if(band.recordLabel === labelsArray[index]){
          festivalsArray.push({name: band.recordLabel, festivals: festival.name}) 
        }
      })
    ))
}

export async function getStaticProps() {
  const res = await
    fetch("https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals");
    const data : Data = await res.json();
    return {
        props: {
            festivals: data,
        },
    }; 
}

export default festivalsPage;