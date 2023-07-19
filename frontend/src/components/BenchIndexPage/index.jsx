import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBenches } from '../../store/benches';
import BenchList from './BenchList';

const BenchIndexPage = () => {
    const dispatch = useDispatch()
    const benches = useSelector(state => state.benches)
    const benchesArr = Object.values(benches)

    useEffect(() => {
        dispatch(fetchBenches())
    }, [])

    return (
        <>
            <div>Bench Index Page</div>
            <BenchList benches={benchesArr}/>
        </>
    )
}

export default BenchIndexPage;