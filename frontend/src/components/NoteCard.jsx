// import React from 'react'

const NoteCard = () => {
  return (
    <div className="NoteCard">
      <div className="p-3 py-10 m-2 rounded-md shadow-xl bg-blue-600">
        <h5 className="text-xl font-bold">Secret key</h5>
        <p className="mt-5 text-sm">Don`t forget the secret key</p>
        <div className="mt-10 flex gap-3">
          <button className="bg-white p-1 pl-3 pr-3 rounded-lg text-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
