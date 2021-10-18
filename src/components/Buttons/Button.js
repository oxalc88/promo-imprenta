function Button ({ settingItems, onClickFunction }){
    
    return( 
        <button lassName="absolute inset-y-0 left-1 flex items-center" onClick={onClickFunction}>
        {settingItems}
        </button>);
};

export {Button}