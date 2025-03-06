'use client';

import { TextScramble } from "../motion-primitives/text-scramble";



export function TextShimmerWaveColor() {
  return (
    <TextScramble
      className='font-mono text-lg'
      duration={1.2}
      characterSet='. '
    >
      The Deeds Limpeza
    </TextScramble>
  );
}

 