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
         className="prefix__feather prefix__feather-search"
         {...props}
      >
         <circle cx={11} cy={11} r={8} />
         <path d="M21 21l-4.35-4.35" />
      </svg>
   );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
