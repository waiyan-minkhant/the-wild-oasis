fetch(
  "https://uqgigotknuknxhevxtdy.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg",
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lnb3RrbnVrbnhoZXZ4dGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTkyMDUsImV4cCI6MjAzMzkzNTIwNX0.RRVRMfYptxZM7099HxOp3_HLPUgHwaRsEANmjxQRG-Y", // Replace with your actual API key
    },
  }
)
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.blob();
  })
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    window.open(url);
  })
  .catch((error) => console.error("Error:", error));
