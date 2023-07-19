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
            <div className="bench-index-header">Bench Index Page!</div>
            <div className="bench-list-container">
                <BenchList benches={benchesArr}/>
            </div>
        </>
    )
}

export default BenchIndexPage;