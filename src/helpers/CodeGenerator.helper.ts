import { GenerateCode } from './../entities/GenerateCode';
const generate = (permitted: string, size: number): string => {
  let code = '';

  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * permitted.length);
    code += permitted[index];
  }
  return code;
};

const getCandidates = (): any => {
  return {
    number: '0123456789',
    letters: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!$#%&*-_',
  };
};

const buildCandidates = (config: GenerateCode = {}): string => {
  const candidates: any = getCandidates();
  let permitted: string = '';
  Object.keys(config).forEach((key: string) => {
    if (candidates[key]) {
      permitted += candidates[key];
    }
  });
  return (
    permitted ||
    Object.keys(candidates).reduce(
      (pre: string, curr: string) => pre + candidates[curr]
    )
  );
};

export default { generate, buildCandidates };
