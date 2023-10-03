
function Schedule() {
  return (
    <div id="itinerary" className="section">
      <h1 className="m-auto section-title" style={{'margin-bottom': '-1.5rem'}}>Schedule</h1>
      <br/>
      <div className="schedule-container select-none">
        <table className="schedule">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Organizer</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Time">8:00 AM</td>
              <td data-label="Event">Check-In Begins</td>
              <td data-label="Organizer">Society of Hispanic Professional Engineers (SHPE)</td>
              <td data-label="Location">HALL OF FLAGS (ENB II)</td>
            </tr>

            <tr>
              <td data-label="Time">10:00 AM</td>
              <td data-label="Event">Opening Ceremony</td>
              <td data-label="Organizer">Beginners Guide to Hackathon</td>
              <td data-label="Location">ENB 118</td>
            </tr>

            <tr>
              <td data-label="Time">11:00 AM</td>
              <td data-label="Event">Hacking Begins!</td>
              <td data-label="Organizer">Society of Hispanic Professional Engineers (SHPE)</td>
              <td data-label="Location"></td>
            </tr>

            <tr>
              <td data-label="Time">12:00 PM</td>
              <td data-label="Event">Technical Interview Prep</td>
              <td data-label="Organizer">Association for Computing Machinery (ACM)</td>
              <td data-label="Location">ENB 116</td>
            </tr>
            
            <tr>
              <td data-label="Time">1:00 PM</td>
              <td data-label="Event">How to Present Your Project</td>
              <td data-label="Organizer">Society of Professional Hispanic Engineers (SHPE)</td>
              <td data-label="Location">ENB 118</td>
            </tr>

            <tr>
              <td data-label="Time">1:00 PM</td>
              <td data-label="Event">Competitive Coding Challenge</td>
              <td data-label="Organizer">Association for Computing Machinery (ACM)</td>
              <td data-label="Location">ENB 116</td>
            </tr>

            <tr>
              <td data-label="Time">2:00 PM - 4:00pm</td>
              <td data-label="Event">Website Development</td>
              <td data-label="Organizer">IEEE Computer Society</td>
              <td data-label="Location">ENB 116</td>
            </tr>

            <tr>
              <td data-label="Time">2:00 PM - 4:00pm</td>
              <td data-label="Event">Internet of Things with Amazon Echo</td>
              <td data-label="Organizer">IEEE Computer Society</td>
              <td data-label="Location">ENB 118</td>
            </tr>

            <tr>
              <td data-label="Time">4:00 PM</td>
              <td data-label="Event">Git Fundamentals</td>
              <td data-label="Organizer">Women in Computer Science and Engineering (WiCSE)</td>
              <td data-label="Location">ENB 116</td>
            </tr>

            <tr>
              <td data-label="Time">4:00 PM</td>
              <td data-label="Event">How to Succeed in Hackathons</td>
              <td data-label="Organizer">Google Development Student Club (GDSC)</td>
              <td data-label="Location">ENB 118</td>
            </tr>

            <tr>
              <td data-label="Time">5:00 PM</td>
              <td data-label="Event">Machine Learning</td>
              <td data-label="Organizer">Girls Who Code (GWC)</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">6:00 PM</td>
              <td data-label="Event">Dinner</td>
              <td data-label="Organizer">Society of Hispanic Professional Engineers (SHPE)</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">8:00 PM</td>
              <td data-label="Event">TBA</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">HALL OF FLAGS (ENB II)</td>
            </tr>

            <tr>
              <td data-label="Time">9:00 PM</td>
              <td data-label="Event">TBA</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">10:00 PM</td>
              <td data-label="Event">Closing Ceremony</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">11:00 PM</td>
              <td data-label="Event">TBA</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">12:00 AM</td>
              <td data-label="Event">Grading</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">TBA</td>
            </tr>

            <tr>
              <td data-label="Time">1:00 AM</td>
              <td data-label="Event">Closing Ceremony</td>
              <td data-label="Organizer">TBA</td>
              <td data-label="Location">TBA</td>
            </tr>


          </tbody>
        </table>
      </div>
      <br/>
    </div>
  );
}

export default Schedule;