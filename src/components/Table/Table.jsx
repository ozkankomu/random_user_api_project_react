import React from "react";

const Table = ({ table, flag, setFlag }) => {
  return (
    <>
      {flag ? (
        <p
          className="mesage"
          style={{ marginTop: "10px", color: "darkred", fontSize: "1.1rem" }}
        >
          (You can add the same user only once.)
        </p>
      ) : (
        <p></p>
      )}
      <table className="table">
        {table.length > 0 && (
          <thead>
            <tr className="head-tr ">
              <th className="th">Firstname</th>
              <th className="th">Email</th>
              <th className="th">Phone</th>
              <th className="th">Age</th>
            </tr>
          </thead>
        )}
        <tbody>
          {table?.map((item) => {
            return (
              <tr key={item.id}>
                <th className="td">{item.firstName}</th>
                <th className="td">{item.email}</th>
                <th className="td">{item.phone}</th>
                <th className="td">{item.age}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
