import { memo, SVGProps } from 'react';

const IcBaselineBatteryStdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.14299 6.39623L3.14299 7.67855H1.60728V10.75H3.14299V12.0323C3.14299 12.5928 3.60371 13.0535 4.16424 13.0535H15.9355C16.5037 13.0535 16.9644 12.5928 16.9644 12.0323V6.40391C16.9644 5.8357 16.5037 5.37498 15.9432 5.37498L4.16424 5.37498C3.60371 5.37498 3.14299 5.8357 3.14299 6.39623Z'
      fill='#E9E9E9'
    />
  </svg>
);
const Memo = memo(IcBaselineBatteryStdIcon);
export { Memo as IcBaselineBatteryStdIcon };
