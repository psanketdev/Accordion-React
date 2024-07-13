import React, { useState } from "react";

const students = [
  { name: "John", age: 20, city: "New York" },
  { name: "Jane", age: 22, city: "San Francisco" },
  { name: "Mike", age: 21, city: "Chicago" },
  { name: "Sara", age: 23, city: "Miami" },
  { name: "Tom", age: 24, city: "Los Angeles" },
  { name: "Anna", age: 22, city: "Boston" },
  { name: "James", age: 20, city: "Houston" },
  { name: "Emily", age: 21, city: "Seattle" },
  { name: "Robert", age: 23, city: "Austin" },
  { name: "Laura", age: 24, city: "Denver" },
  { name: "David", age: 22, city: "Atlanta" },
  { name: "Sophia", age: 20, city: "Orlando" },
  { name: "Daniel", age: 21, city: "Phoenix" },
  { name: "Olivia", age: 23, city: "Philadelphia" },
  { name: "Andrew", age: 24, city: "San Diego" },
  { name: "Grace", age: 22, city: "Dallas" },
  { name: "Matthew", age: 20, city: "Portland" },
  { name: "Isabella", age: 21, city: "Charlotte" },
  { name: "Joseph", age: 23, city: "San Jose" },
  { name: "Mia", age: 24, city: "Las Vegas" },
  { name: "John", age: 20, city: "New York" },
  { name: "Jane", age: 22, city: "San Francisco" },
  { name: "Mike", age: 21, city: "Chicago" },
  { name: "Sara", age: 23, city: "Miami" },
  { name: "Tom", age: 24, city: "Los Angeles" },
  { name: "Anna", age: 22, city: "Boston" },
  { name: "James", age: 20, city: "Houston" },
  { name: "Emily", age: 21, city: "Seattle" },
  // Add more student data as needed
];

const LoadMore = () => {
  
  const [stdList, setStdList] = useState(0);
  const firstList = 10;

  const startIndex = stdList * 10;
  const endIndex = startIndex + firstList;
  const studentList = students.slice(startIndex, endIndex);

  const showNext = () => {
    setStdList((prev) => prev + 1);
  }

  const showPrev = () => {
    setStdList((prev) => prev - 1);
  }

  return (
    <section>
      <div className="container">
      <h2 className="mb-3">Load More</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {studentList &&
            studentList.map((val, index) => {
              return (
                <tr key={index}>
                  {Object.values(val).map((item, index) => {
                    return <td key={index}>{item}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="ml-auto">
        <button className="btn btn-primary" onClick={showPrev} disabled={stdList === 0}>Prev</button>
        <button className="btn btn-primary ml-4" onClick={showNext} disabled={endIndex > students.length}>Next</button>
      </div>
      </div>
    </section>
  );
};

export default LoadMore;
