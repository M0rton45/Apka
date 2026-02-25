interface CounterProps {
  count: number;
}
// count to jest jakby parametr funkcji z js-a
//
export default function Counter({ count }: CounterProps) {
  return <div>Counter: {count}</div>;
}
