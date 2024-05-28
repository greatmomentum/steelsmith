import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="text-lg mb-4">Are you sure you want to delete this item?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onConfirm}>Yes</button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
