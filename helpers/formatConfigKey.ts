export function formatConfigKey(configNameString: string) {
  const frag = configNameString.split(' ');
  return `${frag[0].toLowerCase()}${frag.slice(1).join('')}`
}