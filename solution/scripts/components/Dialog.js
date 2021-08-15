function Dialog({opened, onFinish}){  
    return <div className='dialog'> 
        <div className='modal'>
            <div className="head">
               <div className='heading'> DOM Tree </div>
               <Icon iconClassName='close'  onClick={onFinish}></Icon>
            </div>
            <div  className="body">
                <DomeTree/>
            </div>
            <div  className="footer"> 
                    <a href='README.md'>Help</a>
                    <button className='done' onClick={onFinish}>Done</button> 
            </div>
        </div>
    </div>
}