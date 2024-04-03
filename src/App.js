import React, { useState } from "react";
import "./App.css";
const tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [data, setData] = useState(tableData);

  const handleDate = () => {
    const sortedDate = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      return b.views - a.views;
    });
    setData(sortedDate);
  };
  const handleViews = () => {
    const sortedDate = [...data].sort((a, b) => {
      const viewCompare = b.views - a.views;
      return viewCompare !== 0
        ? viewCompare
        : new Date(b.date) - new Date(a.date);
    });
    setData(sortedDate);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => (
            <tr key={items.date + index}>
              <td>{items.date}</td>
              <td>{items.views}</td>
              <td>{items.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;