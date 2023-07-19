// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const BenchListItem = ({bench}) => {
    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/api/benches/${bench.id}`)
    }
    
    return (
        <>
            <div onClick={handleClick}>{bench.title}</div>
            <p>{bench.price}</p>
        </>
    )
}

export default BenchListItem;