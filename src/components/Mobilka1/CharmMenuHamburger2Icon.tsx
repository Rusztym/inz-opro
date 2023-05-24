import { memo, SVGProps } from 'react';

const CharmMenuHamburger2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 18H19.75M4 12H19.75M4 6H19.75'
      stroke='#727272'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CharmMenuHamburger2Icon);
export { Memo as CharmMenuHamburger2Icon };
