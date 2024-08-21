import React, { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleAddComment = () => {
    if (author && text) {
      const newComment: Comment = {
        id: comments.length + 1,
        author,
        text,
      };
      setComments([...comments, newComment]);
      setAuthor('');
      setText('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-md img-shadow shadow-md " dir="rtl">
      <h2 className="text-2xl font-bold mb-4 text-right">ثبت دیدگاه</h2>
      <div className="mb-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="نام شما"
          className="w-full p-2 border rounded-md mb-2 text-right"
          style={{ direction: 'rtl' }} // Ensures input text direction is correct
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="دیدگاه شما"
          className="w-full p-2 border rounded-md text-right"
          style={{ direction: 'rtl' }} // Ensures text direction is correct
        />
      </div>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        ارسال دیدگاه
      </button>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-right">دیدگاه‌ها</h3>
        {comments.length === 0 ? (
          <p className="text-right">هنوز دیدگاهی ثبت نشده است.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                <p className="font-bold text-right">{comment.author}</p>
                <p className="text-right">{comment.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
