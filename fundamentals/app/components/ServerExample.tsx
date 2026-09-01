export default function ServerExample() {
  console.log("This is running on the server");

  return (
    <div className="mt-6 rounded-lg border p-6">
      <h2 className="text-xl font-bold">
        Server Component
      </h2>

      <p className="mt-2">
        This component is a Server Component.
      </p>
    </div>
  );
}