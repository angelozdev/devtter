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
         className="prefix__feather prefix__feather-arrow-left"
         {...props}
      >
         <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
   );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
