import React from 'react'

const ButtonLayout = (props) => {
    return (
        <div>
            <button style={{marginLeft:'5px', marginRight:'5px',fontWeight: '500' ,border: 'none' ,outline: 'none',height: '20px' ,background: '#EEEEEE',color: 'black',fontSize: '11px',borderRadius: '8px'
	}}>{props.data.Button} </button>
        </div>
    )
}
export default ButtonLayout
