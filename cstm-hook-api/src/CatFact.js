import {useGetCat} from './useGetCat';
export const CatFact = ()=>{
    const  {data,refetchData,isCatLoading,error} = useGetCat();

    if(isCatLoading) return <h1>Loading...</h1>
    if(error) return <h1>Error Occured</h1>
    return(
        <div>
            <button onClick={refetchData}>Refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}