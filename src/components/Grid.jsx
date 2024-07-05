import { Card } from "./Card";
import { ImageAPI } from "./ImageAPI";
import { v4 as uuidv4 } from "uuid";
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache();

function Container(){
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://picsum.photos/v2/list?page=2&limit=10").then(
            (res) => res.json()
        ).then((a,b,c)=>{
            console.log(a,b,c);
        })
    );
    if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {data}
    </div>
  )
}

function Grid(props) {
    return (
        <ReactQueryCacheProvider
            queryCache={queryCache}
        >
            <Container></Container>
        </ReactQueryCacheProvider>
    );
}

export { Grid };
