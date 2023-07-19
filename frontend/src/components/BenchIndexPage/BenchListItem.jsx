// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const BenchListItem = ({bench}) => {
    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/api/benches/${bench.id}`)
    }
    
    return (
        <>
            <div className="bench-list-item">
                <p className="bench-link" onClick={handleClick}>{bench.title}</p>
                <p>{bench.price}</p>
            </div>
        </>
    )
}

export default BenchListItem;