import React, {useRef} from "react";
import "./style/achievements.css";

const Achieveiments = () => {


  const events = useRef("");
  const members = useRef("");
  const awards = useRef("");

  const achievload = (event) => {
    event.preventDefault();
    console.log(events.current.value);
  };

  return (
    <>
    <h1>Achieveiments</h1>
    <form onSubmit={(e) => achievload(e)}>
      <div className="achievCards" >

        <div className="achievCard achievEventsCard">
          <div className="achievLogo"></div>
          <label className="achievTitle" htmlFor="events">Events</label>
          <input id="events" type="number" required ref={events} />
        </div>

        <div className="achievCard achievMembersCard">
          <div className="achievLogo"></div>
          <label className="achievTitle" htmlFor="members" >Members</label>
          <input id="members" type="number" required ref={members}  />
        </div>

        <div className="achievCard achievAwardsCard">
          <div className="achievLogo"></div>
          <label className="achievTitle" htmlFor="awards">Awards</label>
          <input id="awards" type="number" required ref={awards}  />
        </div>
    
      </div>
      <button>Save</button>
    </form>
    </>
  )
};

export default Achieveiments;
