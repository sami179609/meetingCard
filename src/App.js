
import './App.css';
import MeetingCard from './UI Element/MeetingCard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
function App() {
  return (
    <>
    <div style={{ display:'flex',marginTop:'80px',marginLeft:'100px'}} >
      <MeetingCard data={{ Date:'29 Nov 2020,3:30pm',Text:'This booking has not  been yet confirmed', Heading :'HDMI Room',Bottom :'Projector(2),Catering', Button:'Pending', Icon :<ScheduleIcon fontSize="1.5rem"   />}}/>
      <MeetingCard data={{Date:'29 Nov, 3:30pm' ,Text:'This booking has been confirmed',Heading :'RJ-45 Room',Bottom :'Catering', Diff:2, Button:'Confirmed', Icon  :<CheckCircleOutlinedIcon fontSize="1.5rem"  />}} />
    
      </div>
    </>
  );
}

export default App;
