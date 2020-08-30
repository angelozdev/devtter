import formatDistance from 'date-fns/formatDistance';

const useTimeago = (timestamp: number): string => {
   return formatDistance(new Date(timestamp), new Date(), { addSuffix: true });
};

export default useTimeago;
