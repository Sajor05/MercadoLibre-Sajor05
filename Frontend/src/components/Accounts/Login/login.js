const loginControl = async () => {
  const response = await fetch("http://localhost:8000/api/token/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "usuario",
      password: "contraseña",
    }),
  });

  const data = await response.json();
  console.log(data);
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);
};

const getProfile = async () => {
  const token = localStorage.getItem("access");
  const response = await fetch("http://localhost:8000/api/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
};
