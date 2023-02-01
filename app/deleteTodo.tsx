"use client";

export const DeleteTodo = ({
  onDelete,
}: {
  onDelete: () => void;
}): JSX.Element => {
  return <button onClick={onDelete}>Delete</button>;
};
