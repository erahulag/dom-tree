function Dialog({opened, children, onFinish}){  
    return <div className='dialog'> 
        <div className='modal'>
            <div className="head">
               <div className='heading'> DOM Tree </div>
               <Icon iconClassName='close'  onClick={onFinish}></Icon>
            </div>
            <div  className="body">
               {children}
            </div>
            <div  className="footer"> 
                    <a href='resources/README.md'>Help</a>
                    <button className='done' onClick={onFinish}>Done</button> 
            </div>
        </div>
    </div>
}