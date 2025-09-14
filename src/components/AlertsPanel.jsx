import React, { useState } from "react";

export default function AlertsPanel() {
  const [alerts] = useState([
    { id: 1, level: "INFO", msg: "System started" },
    { id: 2, level: "WARN", msg: "Train T2 delayed by 5 min" },
  ]);

  return (
    <ul>
      {alerts.map((a) => (
        <li key={a.id}>
          <strong>{a.level}</strong> - {a.msg}
        </li>
      ))}
    </ul>
  );
}
