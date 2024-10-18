import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search({ searchKeyword }) {
  const [filteredCourses, setFilteredCourses] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();

        
        const courses = data.results.map((pokemon) => ({
          id: pokemon.name,
          title: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        }));

        
        const filtered = courses.filter(course =>
          course.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        setFilteredCourses(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchKeyword) {
      fetchCourses();
    } else {
      setFilteredCourses([]); 
    }
  }, [searchKeyword]);

  return (
    <div className="mx-10 h-[1300px]">
      <div>
        <p className="text-4xl font-medium my-4">Search Results</p>
      </div>
      <nav aria-label="breadcrumb" className="text-lg my-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/Courses">Courses</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Search
          </li>
        </ol>
      </nav>
      <div className="flex justify-between w-full">
        <div className="w-5/6 rounded-xl border p-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-4 gap-5">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card border p-4 rounded">
                  <h3 className="font-semibold">{course.title}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
