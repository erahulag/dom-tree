function Icon({onClick, type, variant, iconClassName='class', hidden=false, disable=false}){
    const handleClick= e=> {
        if(!hidden && onClick)
            onClick();
            
    }
    return <div className={cList({
                            icon: true,
                            [type]: true,
                            [variant]: true,
                            hidden,
                            disable,
                            [iconClassName]:true
                        })}
                        onClick={handleClick}></div>
            
}