
# pi-shaped-workshop-kartikay

Server 
<img width="1711" height="573" alt="image" src="https://github.com/user-attachments/assets/1c0dbdc5-c8b5-4c8e-a2e6-2490e0bf572b" />
DEMO SCREENSHOTS

<img width="1569" height="189" alt="image" src="https://github.com/user-attachments/assets/665ffe35-ecef-493c-818b-667664993a67" />
<img width="1837" height="502" alt="image" src="https://github.com/user-attachments/assets/34becc0e-89dd-49b8-b14c-35a6bf9a8342" />
<img width="1718" height="440" alt="image" src="https://github.com/user-attachments/assets/ca5d4d4f-83d2-4abf-adcf-e8fa4adc27f1" />



Core Concept:

1. How does React communicate with Node.js in your project?
React (frontend) sends a request to Node.js (backend), and Node.js sends a response back.
React calls an API using fetch() or axios.
Node.js receives the request using Express.
Node replies with data (like JSON).
React shows that data on UI.
This is the request-response cycle:
React → API Call → Node.js → Response → React updates UI


2. Difference between REST APIs and WebSockets
Feature	REST API	WebSocket
Connection	One-time per request	Continuous connection
Direction	Client requests, server replies	Both sides can send data anytime
Use case	Normal apps (CRUD, forms, login)	Real-time apps (chat, notifications, games)
When to use:
REST API → If you only need request and response (e.g., login, data fetch).
WebSocket → If you need live updates (e.g., chat, stock prices).


3. What is the role of the event loop in Node.js?
The event loop helps Node.js handle many tasks at once without blocking the system.
Example:
When Node.js gets a heavy or async task (like DB call, file read),
It gives it to a worker thread,
Meanwhile, Node continues other work,
When the result is ready, the event loop picks it up.
That's why Node.js is fast and non-blocking.


4. How did you handle async calls or state updates in React?
I used:
useState → to store data.
useEffect → to call APIs or update UI.
Async function → to fetch data.
Example:
const [notes, setNotes] = useState([]);
useEffect(() => {
  async function getNotes() {
    const res = await fetch('/api/notes');
    const data = await res.json();
    setNotes(data);
  }
  getNotes();
}, []);

5. What can be improved to make this app production-ready?
Some improvements:
Database – Right now data is in memory, but in production we should use MongoDB, MySQL, etc.
Authentication – Add login/sign-up so only allowed users can access.
Error handling – Add try-catch and proper messages.
Validation – Check input before saving.
Security – Use CORS, Helmet, and environment variables.
