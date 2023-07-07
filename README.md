## Updated code on Github account

https://github.com/ravi221/next-http/tree/master

## In order to display the HTTP API application that lists out music festival data in a particular manner. we are using Next Js and TypeScript.

## Handling interface for the response and payload data

```sh
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
```

## Fetching response from the endpoint and storing into props.

```sh
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
```

## Getting the props response from the async getStaticProps and rendering on UI.

```sh
function festivalsPage( { festivals } : InferGetStaticPropsType<typeof  getStaticProps> ) {
    console.log(festivals);
    return festivals.map((festival) => ( 
      festival.bands.map((band, index) => {
        if(band.recordLabel === labelsArray[index]){
          festivalsArray.push({name: band.recordLabel, festivals: festival.name}) 
        }
      })
    ))
}
```
- which gives output of festivals endpoint and remapping the JSON format in required structure.
