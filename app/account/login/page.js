export default function LoginPage() {
  return (
    <main className="max-w-9xl mx-auto px-4 sm:px-6 py-8 bg-blue-200 h-screen items-center flex justify-center"> 
      <div className="bg-gray-200  max-w-2xl mx-auto rounded-lg shadow-sm p-6  "> 
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border-white rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </main>
  );
}   



