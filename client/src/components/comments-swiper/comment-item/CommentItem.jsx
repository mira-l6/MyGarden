export default function CommentItem({
    comment,
}) {

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4 sm:flex-row flex-col sm:items-center max-w-full">
            <img
                className="user-image w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                src="https://img.freepik.com/premium-vector/person-with-green-blue-logo-that-says-name_1076610-66914.jpg"
                alt="User Avatar"
            />
            <div className="w-full overflow-hidden">
                <h4 className="comment-user text-sm font-semibold text-gray-800 break-words">{comment.email}</h4>
                <p className="comment-text text-dark text-sm break-words overflow-hidden">{comment.comment}</p>
            </div>
        </div>
    );
}