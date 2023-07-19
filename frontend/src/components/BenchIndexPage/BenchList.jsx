import BenchListItem from "./BenchListItem";

const BenchList = ({benches}) => {
    return (
        <>
            <h1>Benches</h1>
            {benches.map((bench) => <BenchListItem key={bench.id} bench={bench}/>)}
        </>
    )
}

export default BenchList;