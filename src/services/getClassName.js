export default function getClassName(...args) {
  const result = args.filter(item => item);
  return result.join(' ');
};
