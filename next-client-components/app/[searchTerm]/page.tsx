import { FC } from "react"
import { getWikiResults } from "@/services";
import { SearchResult,Result } from "@/types";

type Props = {
  params:{
    searchTerm:string
  }
}

const page:FC<Props> = async({params:{searchTerm}}) => {
    const wikiData:Promise<SearchResult []> = getWikiResults(searchTerm);
    const data = await wikiData;
    const results: Result [] | undefined = data?.query?.pages;
  
    return (
    <main>
        { results ? Object.values(results).map(result =>{
           return <p key={result.pageid}>{JSON.stringify(result)}</p>
        })
        :<h2>{`${searchTerm} not found`}</h2>
        }
        
    </main>
  )
}

export default page