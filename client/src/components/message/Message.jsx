export default function Message({
    message
}) {
    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
            {message}
        </div>
    );
}