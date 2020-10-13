import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         width={100}
         height={100}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={0.5}
         strokeLinecap="round"
         strokeLinejoin="round"
         className="prefix__feather prefix__feather-home"
         {...props}
      >
         <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
         <path d="M9 22V12h6v10" />
      </svg>
   );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
