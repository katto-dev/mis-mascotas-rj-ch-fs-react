import { useEffect, useState} from 'react';

const ItemCount = ( { stock = 0, initial = 1, onAdd } ) => {
    
    const [ count, setCount ] = useState( 0 );

    useEffect( () => {
        setCount( initial );
    }, [] );

    const aumentar = () => {
        if ( count < stock ) {
            setCount( count + 1 );
        }
    }

    const disminuir = () => {
        if ( count > initial ) {
            setCount( count - 1 );
        }
    }

    return (
        <>
            <button type="button" className="btn btn-outline-dark" onClick={ disminuir }>-</button>
            <button type="button" className="btn btn-light cantidad" disabled>{ count }</button>
            <button type="button" className="btn btn-outline-dark" onClick={ aumentar }>+</button>
                {
                    stock && count
                    ? <button type="button" className="bton bton-celeste " onClick={ ()=> onAdd( count ) }>Agregar al carrito</button>
                    : <button type="button" className="bton bton-celeste " disabled>Agregar al carrito</button>
                }
        </>
    );
}

export default ItemCount;