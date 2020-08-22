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
         className="prefix__feather prefix__feather-inbox"
         {...props}
      >
         <path d="M22 12h-6l-2 3h-4l-2-3H2" />
         <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
      </svg>
   );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
