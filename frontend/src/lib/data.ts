import { unstable_noStore } from "next/cache";

// COURSES ENDPOINTS
export async function fetchPopularCourses(
  min: number,
  max: number,
  maxResults: number
) {
  try {
    unstable_noStore();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/between/${min}/${max}/${maxResults}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchMostPopularCourse() {
  try {
    unstable_noStore();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/popular`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchCoursesPaginated(page: number, maxElements: number) {
  try {
    unstable_noStore();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/paginated/${page}/${maxElements}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

export async function fetchSearchedCourses(
  query: string,
  page: number,
  maxElements: number
) {
  try {
    unstable_noStore();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/like/${query}/${page}/${maxElements}`
    );
    const data = await res.json();
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/id/${id}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}

//SECTION ENDPOINTS
export async function fetchSectionsByCourse(id: number) {
  try {
    unstable_noStore();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sections/course/${id}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to fetch courses data");
  }
}


// USERS ENDPOINTS
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
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
    throw new Error("Failed to register the user");
  }
}

export async function enrollUserInCourse(email: string, courseId: number, token: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/courses/enroll`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          courseId
        }),
      }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to enroll the user");
  }
}

export async function confirmUser(token: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/confirm/${token}`,
      { method: "PUT", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("Failed to confirm the user");
  }
}

export async function checkSessionStatus(token: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();
    if (data.code === 401) throw new Error("Expired JWT token");
  } catch (err) {
    throw new Error("Unexpected error");
  }
}
