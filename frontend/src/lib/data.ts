import { unstable_noStore } from "next/cache";


// COURSES ENDPOINTS
export async function fetchPopularCourses() {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/where/15000`);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchMostPopularCourse() {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/popular`);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchCourseById(id: number) {
  try {
    //Forced await simulation
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    unstable_noStore();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/id/${id}`);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}


// USERS ENDPOINTS
export async function registerUser(name: string, email: string, password: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function confirmUser(token: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/confirm/${token}`, {method: "PUT", headers: {"Content-Type": "application/json"}});
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}
