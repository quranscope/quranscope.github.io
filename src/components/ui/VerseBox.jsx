/**
 * VerseBox Component
 * Styled box for displaying Quranic verses with references
 */
export default function VerseBox({ text, reference, context }) {
  return (
    <div className="bg-gray-50 border-l-4 border-red-500 p-4 my-4 rounded-md">
      <blockquote className="italic text-gray-700 mb-2">
        "{text}"
      </blockquote>
      {reference && (
        <div className="text-red-600 font-bold text-sm mt-2">
          {reference}
        </div>
      )}
      {context && (
        <p className="text-gray-600 text-sm mt-3 pt-3 border-t border-gray-200">
          {context}
        </p>
      )}
    </div>
  );
}
