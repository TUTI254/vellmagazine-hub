import NavBar from "../components/NavBar";

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <div className="font-serif min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8  border-0  p-12 shadow-xl">
          <h2 className="text-2xl font-bold">Welcome to the Dashboard !</h2>
          <p>What do you wanna do Today? </p>
        </div>
      </div>
    </>
  );
}
