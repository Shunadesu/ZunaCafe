
import loading from '../../assets/gif/loading.webp'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        {/* Spinner */}
        <img src={loading} alt="loading"/>
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;