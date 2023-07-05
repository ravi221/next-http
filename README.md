## Updated code on Github account

https://github.com/ravi221/next-http/tree/master

## Code on index.js

```sh
export async function getStaticProps() {
  const res = await
    fetch("https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals");
    const data = await res.json();
    return {
        props: {
            festivals: data,
        },
    }; 
}
```
- which gives output of festivals endpoint and remapping the JSON format in required structure.
