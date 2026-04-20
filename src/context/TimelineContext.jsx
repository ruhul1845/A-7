import { useState } from "react";
import { TimeLine } from "./TimeLine";

const TimelineContext = ({ children }) => {

    const [Contact, SetContact] = useState([])

    const data = {
        Contact,
        SetContact
    }

    return (
        <TimeLine.Provider value={data}>{children}</TimeLine.Provider>
    );
};

export default TimelineContext;