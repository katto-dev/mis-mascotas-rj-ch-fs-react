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
            <button type="button" className="btn btn-outline-dark" onClick={ aumentar }>+</button>&nbsp; &nbsp; 
                {
                    stock && count
                    ? <button type="button" className="btn btn-primary" onClick={ ()=> onAdd( count ) }>AGREGAR AL CARRITO</button>
                    : <button type="button" className="btn btn-secondary" disabled>AGREGAR AL CARRITO</button>
                }
        </>
    );
}

export default ItemCount;