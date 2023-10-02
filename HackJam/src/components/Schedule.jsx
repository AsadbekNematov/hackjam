import schedule from '../assets/schedule.png'

function Schedule() {
  return (
    <div id="itinerary" className="section">
      <h1 className="m-auto section-title" style={{'margin-bottom': '-1.5rem'}}>Itinerary</h1>
      <br/><br/>
      <img src={schedule} className="sched select-none" alt="schedule"/>
      <br/>
    </div>
  );
}

export default Schedule;
