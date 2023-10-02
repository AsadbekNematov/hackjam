import schedule from '../assets/schedule.png'

function Schedule() {
  return (
    <div id="itinerary" className="section">
      <h1 className="m-auto" style={{'margin-bottom': '-1.5rem'}}>Itinerary</h1>
      <br/><br/>
      <img src={schedule} className="sched" alt="schedule"/>
      <br/>
    </div>
  );
}

export default Schedule;
