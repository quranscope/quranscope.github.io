/**
 * VerseView Component
 * Wrapper around VerseBox for verse display
 */
import VerseBox from './VerseBox';

export default function VerseView({ text, reference, context }) {
  return <VerseBox text={text} reference={reference} context={context} />;
}
