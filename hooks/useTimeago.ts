import { useEffect, useState } from 'react';

const DATE_UNITS: Array<[string, number]> = [
   ['day', 60 * 60 * 24],
   ['hour', 60 * 60],
   ['minute', 60],
   ['second', 1]
];

const getDateDiffs = (timestamp: number): { value: number; unit: string } => {
   const now = Date.now();
   const elapsed = (timestamp - now) / 1000;

   for (const [unit, seconds] of DATE_UNITS) {
      if (Math.abs(elapsed) > seconds || unit === 'second') {
         const value = Math.floor(elapsed / seconds);
         return { value, unit };
      }
   }
   return { value: 0, unit: 'minute' };
};

const useTimeago = (timestamp: number) => {
   const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

   useEffect(() => {
      const interval = setInterval(() => {
         const newTimeago = getDateDiffs(timestamp);
         setTimeago(newTimeago);
      }, 10000);

      return () => clearInterval(interval);
   }, [timestamp]);

   const { RelativeTimeFormat } = Intl as any;

   const rtf = new RelativeTimeFormat(navigator.language, {
      style: 'long'
   });

   const { value, unit } = timeago;

   return rtf.format(value, unit);
};

export default useTimeago;
