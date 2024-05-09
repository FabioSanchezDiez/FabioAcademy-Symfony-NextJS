import { unstable_noStore } from "next/cache";

export async function fetchPopularCourses() {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch("http://localhost:8000/courses/where/15000");
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchMostPopularCourse() {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch("http://localhost:8000/courses/popular");
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchCourseById(id: number) {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch(`http://localhost:8000/courses/id/${id}`);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses data");
  }
}
