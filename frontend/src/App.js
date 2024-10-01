import React from "react";

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div>
      {data?.map((user, index) => (
        <h3 key={index}>{user?.name}</h3>
      ))}
    </div>
  );
};

export default App;
