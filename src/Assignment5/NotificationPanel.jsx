// assignment5/NotificationPanel.jsx
import { useSelector } from 'react-redux';

export default function NotificationPanel() {
  const notifications = useSelector(state => state.notifications);

  return (
    <div>
      <h2>Investment Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>🔔 {note}</li>
        ))}
      </ul>
    </div>
  );
}
