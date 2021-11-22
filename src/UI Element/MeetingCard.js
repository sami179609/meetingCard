import React from 'react'
import ButtonLayout from './ButtonLayout';
import Box from '@mui/material/Box';
import DropDownMenu from './DropDownMenu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const MeetingCard = (props) => {
    return (
        <> 
        <div style={{width:350, borderRadius:'5%',height:210, boxShadow:' 0px 1px 6px -4px',marginRight:'20px',background:'white' }}> 
            
        <Box component="span" sx={{marginLeft:'25px',display:'flex',marginTop:'20px',flexDirection:'column',borderLeft:props.data.Diff === 2 ? '4px solid #DDB40A':'4px solid #F0783C'}}>
                <Box component="span" style={{display:'flex',justifyContent: 'space-between',marginBottom:13}}>
                <p style={{   marginLeft:' 5px',marginTop:'-2px',fontSize:'22px',fontWeight:'bold'}}> {props.data.Heading} </p>
                <DropDownMenu />
                </Box>
                <Box component="span" style={{display:'flex',justifyContent: 'inline-block', marginTop:'-30px'}}>
                < ButtonLayout data={{Button:'Small meeting room'}} />
                < ButtonLayout data={{Button:'Boardroom'}} />
                </Box>
                </Box>
                
            <h5 style={{marginLeft:'25px',color:'grey', marginTop:'15px',fontSize:'13px'}} >Start time</h5>
            <p style={{marginLeft:'25px',fontSize:'12px', fontWeight:'bold', marginTop:'-10px'}}> {props.data.Date}</p>
            <ChevronRightIcon style={{marginLeft:'140px',marginTop:'-40px',display:'flex'}} />
            <h5 style={{ color:'gray' ,marginLeft: '180px' ,marginTop: '-41px'}}> End time</h5>
            <p style={{ fontWeight: 'bold' ,fontSize: '12px',marginLeft: '180px', marginTop:'-10px'}}>  31 Nov,7:00pm</p>
                        
            <span style={{display:'flex',justifyContent: 'space-between',marginTop:20, marginLeft:'18px'}}>
            <p style={{display:'flex',color:'grey', fontWeight:'500',fontSize:'12px'}}>< ButtonLayout  data={{Button:'+'}} /> {props.data.Bottom}</p>      
              <button  style={{display:'flex',alignItems:'center',marginTop:'10px',marginRight:'20px',background:props.data.Diff === 2 ? '#AAE3C0' : '#F9C9B2',fontWeight: '500' ,border: 'none' ,outline: 'none',height: '20px' ,color: 'black',borderRadius: '8px'}}>
            {props.data.Icon }  {props.data.Button}</button> 
            
                </span> 
        </div>
        </>
    )
}

export default MeetingCard
