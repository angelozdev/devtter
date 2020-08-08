import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <React.Fragment>
         <svg
            width={100}
            height={100}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-aperture"
            {...props}
         >
            <circle cx={12} cy={12} r={10} />
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
         </svg>
         <style jsx>{`
            svg {
               padding: 0.5rem;
               border-radius: 50%;
               border: 2px solid ${props.stroke};
            }
         `}</style>
      </React.Fragment>
   );
}

export default SvgComponent;
