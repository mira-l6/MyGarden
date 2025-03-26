export default function PlantDeletePopup({
    plant, 
    hideDelete,
    deleteHandler
}) {
    return (
        <div className="delete-popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg text-dark font-bold mb-4 text-gray-800">Confirm Deletion</h2>
                <p className="mb-4 text-dark">Are you sure you want to delete {`"${plant.common_name}"`}?</p>
                <div className="flex justify-end gap-4">
                    <button className="edit-button px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition" onClick={hideDelete}>Cancel</button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    );
}