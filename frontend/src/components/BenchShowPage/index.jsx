import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { fetchBench } from "../../store/benches";

const BenchShowPage = () => {
    const dispatch = useDispatch();
    const benchId = useParams().benchId;
    const benches = useSelector(state => state.benches);
    const bench = benches[benchId];

    // const [title, setTitle] = useState("null");
    // const [description, setDescription] = useState("null");
    // const [seating, setSeating] = useState("null");
    // const [lat, setLat] = useState("null");
    // const [lng, setLng] = useState("null");

    useEffect(() => {
        dispatch(fetchBench(benchId))
    }, [benchId])

    if (!bench) {
        return null
    }

    // if (bench) {
    //     setTitle(bench.title);
    //     setDescription(bench.description);
    //     setSeating(bench.seating);
    //     setLat(bench.lat);
    //     setLng(bench.lng);
    // }
    return (
        <div>
            <h1>{bench.title}</h1>
            <h2>Details</h2>
            <p>{bench.description}</p>
            <ul>
                <li>{bench.seating}</li>
                <li>{bench.lat}</li>
                <li>{bench.lng}</li>
            </ul>
            <Link to="/">Back to Bench Index Page</Link>
        </div>
    )
}

export default BenchShowPage;