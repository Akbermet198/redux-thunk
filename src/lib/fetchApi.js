const url =
  "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1";

export const fetchAPI = async (path, options = {}) => {
  try {
    const requestOptions = {
      method: options.method || "GET",
      headers: { UserID: "akbermetka" },
    };

    if (requestOptions.method !== "GET") {
      requestOptions.body = JSON.stringify(options.body || {});
    }

    const responce = await fetch(`${url}/${path}`, requestOptions);

    if (!responce.ok) {
      throw new Error("Something went wrong");
    }

    const result = await responce.json();

    return result;
  }
  
  
  
  
  
  
  catch (error) {
    throw error;
  }
};
