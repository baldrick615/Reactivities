
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Header, List} from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
        .then(response => {
          setActivities(response.data)
        })
  }, []);


  return (
      <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity: any) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
          ))}
        </List>
      </div>

  )
}

export default App
